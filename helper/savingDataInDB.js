// const mongoose = require('mongoose');
const Article = require("../models/Article");
const Tweet = require("../models/Tweet");
const Crypto = require("../models/Crypto");

async function processTweet(tweet){
    const { accountName, url, postText, possibleCryptos } = tweet;
    const cryptoIds = [];

    let tweetExist = await Tweet.findOne({ url });

    if(tweetExist){
      console.log("Tweet Exists!!!");
      return;
    }

    const cryptoPromises = Object.entries(possibleCryptos).map(async ([name, abbreviation]) => {
        let crypto = await Crypto.findOne({ name });
        console.log(crypto);
    
        if (!crypto) {
          crypto = new Crypto({ name, abbreviation });
          await crypto.save();
          console.log("new Crypto Saved");
        }
    
        cryptoIds.push(crypto._id);
        crypto.tweetCount += 1;
        await crypto.save();
        console.log("Updated Crypto saved")
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
    for(const tweet of tweets){
      await processTweet(tweet);
    }
}

async function processArticle(article) {
    const { source, title, url, summary, possibleCryptos } = article;
    const cryptoIds = [];

    let articleExist = await Article.findOne({ url });

    if(articleExist){
      console.log("Article Exists!!!");
      return;
    }
  
    const cryptoPromises = Object.entries(possibleCryptos).map(async ([name, abbreviation]) => {
      let crypto = await Crypto.findOne({ name });
      console.log(crypto);
  
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
    // const articlePromises = articles.map(article => processArticle(article));
    // await Promise.all(articlePromises);

    for(const article of articles){
      await processArticle(article);
    }
}

module.exports = {savingTweets,savingArticles};