// const mongoose = require('mongoose');
const Article = require("../models/Article");
const Tweet = require("../models/Tweet");
const Crypto = require("../models/Crypto");

async function processTweet(tweet){
    const { accountName, url, postText, possibleCryptos } = tweet;
    const cryptoIds = [];

    const cryptoPromises = Object.entries(possibleCryptos).map(async ([name, abbreviation]) => {
        let crypto = await Crypto.findOne({ name });
        console.log(name);
    
        if (!crypto) {
          crypto = new Crypto({ name, abbreviation });
          await crypto.save();
        }
    
        cryptoIds.push(crypto._id);
        crypto.articleCount += 1;
        await crypto.save();
      });

    await Promise.all(cryptoPromises);

  const newTweet = new Tweet({
    accountName,
    url,
    post: postText,
    cryptos: cryptoIds,
    createdDate: new Date()
  });

  await newTweet.save();
}

async function savingTweets(tweets){
    const tweetPromises = tweets.map(tweet=> processTweet(tweet));
    await Promise.all(tweetPromises);
}

async function processArticle(article) {
    const { source, title, url, summary, possibleCryptos } = article;
    const cryptoIds = [];
  
    const cryptoPromises = Object.entries(possibleCryptos).map(async ([name, abbreviation]) => {
      let crypto = await Crypto.findOne({ name });
      console.log(name);
  
      if (!crypto) {
        crypto = new Crypto({ name, abbreviation });
        await crypto.save();
      }
  
      cryptoIds.push(crypto._id);
      crypto.articleCount += 1;
      await crypto.save();
    });
  
    await Promise.all(cryptoPromises);
  
    const newArticle = new Article({
      source,
      title,
      url,
      summary,
      cryptos: cryptoIds,
      createdDate: new Date()
    });
  
    await newArticle.save();
  }

async function savingArticles(articles) {
    const articlePromises = articles.map(article => processArticle(article));
    await Promise.all(articlePromises);
}

module.exports = {savingTweets,savingArticles};