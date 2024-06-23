const scrapeWebsite = require("../helper/webScrapper");
const fetchTweetsWithScreenName = require("../helper/tweetScrapper");
const cryptoFinder = require("../helper/cryptoFinder");

// Main function to scrape all websites
const websiteScraper = async (configs) => {
  try {
    const allNewsPromises = configs.map((config) => scrapeWebsite(config));
    const allNews = await Promise.all(allNewsPromises);
    const flatNews = allNews.flat(); // Flatten the array of arrays
    // console.log(flatNews);
    return flatNews;
  } catch (error) {
    console.error("Error fetching articles data:", error);
    return [];
  }
};

// Main function to scrape all the twitter accounts
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

const scraper = async (accounts, configs) => {
  console.log("Fetching all tweets.....");
  const allTweets = await twitterScraper(accounts);

  console.log("Fetching all articles....");
  const allArticles = await websiteScraper(configs);

  const searchForCryptoInTweets = allTweets.map((tweet) => {
    const text = tweet.postText;
    const possibleCryptos = {};
    cryptoFinder(text, possibleCryptos);
    tweet.possibleCryptos = possibleCryptos;
    return tweet;
  });

  const searchForCryptoInArticles = allArticles.map((article) => {
    const texts = article.details;
    const possibleCryptos = {};

    for (let i = 0; i < texts.length; i++) {
      cryptoFinder(texts[i], possibleCryptos);
    }

    article.possibleCryptos = possibleCryptos;
    return article;
  });

  const articlesWithCryptos = searchForCryptoInArticles.filter((obj) => {
    console.log(JSON.stringify(obj.possibleCryptos));
    return JSON.stringify(obj.possibleCryptos) !== "{}";
  });

  const tweetsWithCryptos = searchForCryptoInTweets.filter((obj) => {
    console.log(JSON.stringify(obj.possibleCryptos));
    return JSON.stringify(obj.possibleCryptos) !== "{}";
  });

  return { tweetsWithCryptos, articlesWithCryptos };
};

module.exports = { websiteScraper, twitterScraper, scraper };
