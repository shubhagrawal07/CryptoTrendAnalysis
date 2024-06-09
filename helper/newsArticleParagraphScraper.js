const axios = require("axios");
const cheerio = require("cheerio");

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

module.exports = fetchArticleDetails;
