const scrapeWebsite = require("../helper/webScrapper");
const fetchTweetsWithScreenName = require("../helper/tweetScrapper");
const cryptoFinder = require("../helper/cryptoFinder");

// Main function to scrape all websites
const websiteScraper = async (configs) => {
  const allNewsPromises = configs.map((config) => scrapeWebsite(config));
  const allNews = await Promise.all(allNewsPromises);
  const flatNews = allNews.flat(); // Flatten the array of arrays
  console.log(flatNews);
  return flatNews;
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
  // console.log(allTweets);

  console.log("Fetching all articles....");
  const allArticles = await websiteScraper(configs);
  // console.log(allArticles);

  return { allArticles, allTweets };
};

module.exports = { websiteScraper, twitterScraper, scraper };
