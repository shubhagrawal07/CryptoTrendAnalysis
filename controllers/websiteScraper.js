const scrapeWebsite = require("../helper/commonWebsiteScrappingFunction");
const configs = require("../helper/siteConfigForScrapping");

// Main function to scrape all websites
const websiteScraper = async (req, res) => {
  const allNewsPromises = configs.map((config) => scrapeWebsite(config));
  const allNews = await Promise.all(allNewsPromises);
  const flatNews = allNews.flat(); // Flatten the array of arrays
  console.log(flatNews.length);
  res.json(flatNews);
};

module.exports = websiteScraper;
