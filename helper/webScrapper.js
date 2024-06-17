const axios = require("axios");
const cheerio = require("cheerio");

// const fetchArticleDetails = require("../helper/newsArticleParagraphScraper");

async function fetchArticleDetails(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const paragraphs = [];

    $("p").each((index, para) => {
      const text = $(para).text();
      if (text[0] != "$") paragraphs.push(text);
    });
    return paragraphs;
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return [];
  }
}

// Common scraping function
async function scrapeWebsite(config) {
  try {
    const { data } = await axios.get(config.url);
    const $ = cheerio.load(data);

    const articles = [];

    const leafs = $(config.articleSelector).toArray();
    await Promise.all(
      leafs.map(async (element, index) => {
        const title = $(element).find(config.titleSelector).text().trim();
        const url = $(element).find(config.urlSelector).attr("href");
        const summary = $(element).find(config.summarySelector).text().trim();
        const articleUrl = config.baseUrl ? `${config.baseUrl}${url}` : url;

        const details = await fetchArticleDetails(articleUrl);
        articles.push({
          source: config.source,
          title,
          url: articleUrl,
          summary,
          details,
        });
      })
    );

    return articles;
  } catch (error) {
    console.error(`Error scraping ${config.source}:`, error);
    return [];
  }
}

module.exports = scrapeWebsite;
