const dotenv = require("dotenv");

const { TwitterApi } = require("twitter-api-v2");

dotenv.config();

function cleanTweetText(text) {
  // Remove URLs
  text = text.replace(/https?:\/\/\S+/g, "");
  // Remove mentions
  text = text.replace(/@\w+/g, "");
  // Remove hashtags
  text = text.replace(/#\w+/g, "");
  // Remove extra spaces
  text = text.replace(/\s+/g, " ").trim();

  return text;
}

const client = new TwitterApi(process.env.X_BEARER_TOKEN);

async function fetchTweetsWithScreenName(screenName) {
  try {
    console.log(`fetching tweets from ${screenName}`);
    const user = await client.v2.userByUsername(screenName);
    const userId = user.data.id;

    const tweets = await client.v2.userTimeline(userId, {
      max_results: 5,
      "tweet.fields": ["created_at", "text", "id", "entities"],
      expansions: ["author_id"],
    });

    const tweetData = tweets.data.data.map((tweet) => ({
      accountName: screenName,
      url: `https://twitter.com/${screenName}/status/${tweet.id}`,
      postText: cleanTweetText(tweet.text),
    }));

    return tweetData;
  } catch (error) {
    if (error.code === 429) {
      // Rate limit error
      console.error(
        `Failed to fetch tweets for ${screenName} after ${
          0 + 1
        } attempts due to rate limits.`
      );
      return [];
    } else {
      console.error(`Error fetching tweets for ${screenName}:`, error.code);
      return [];
    }
  }
}


const twitterScraper = async (accounts) => {
  try {
    const allTweetsPromises = accounts.map((screenName) =>
      fetchTweetsWithScreenName(screenName)
    );
    const allTweets = await Promise.all(allTweetsPromises);
    return allTweets.flat();
  } catch (error) {
    console.error("Error fetching tweet data:", error);
    return [];
  }
};


module.exports = twitterScraper;
