const websiteScraper = require("../helper/webScrapper");
const twitterScraper = require("../helper/tweetScrapper");
const cryptoFinder = require("../helper/cryptoFinder");
const {findPossibleCryptos} = require("../helper/cryptoFinder_02");
const {savingTweets,savingArticles} = require("../helper/savingDataInDB");

// Main function to scrape all websites

// Main function to scrape all the twitter accounts

const scraper = async (accounts, configs,tweetCycle) => {
  console.log("Fetching all tweets.....");
  const allTweets = await twitterScraper(accounts[tweetCycle%22]);
  console.log(`${allTweets.length} tweets fetched`)

  console.log("Fetching all articles....");
  const allArticles = await websiteScraper(configs);
  console.log(`${allArticles.length} articles fetched`);

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
    return JSON.stringify(obj.possibleCryptos) !== "{}";
  });

  for(const article of articlesWithCryptos){
    console.log(article.possibleCryptos);
  }

  const tweetsWithCryptos = searchForCryptoInTweets.filter((obj) => {
    return JSON.stringify(obj.possibleCryptos) !== "{}";
  });

  for(const tweet of tweetsWithCryptos){
    console.log(tweet.possibleCryptos);
  }

    console.log("Saving data to the database....");
  await savingTweets(tweetsWithCryptos);
  await savingArticles(articlesWithCryptos);

  return { tweetsWithCryptos, articlesWithCryptos };
};




const scraper_02 = async(accounts, configs,tweetCycle)=>{
  console.log("Fetching all tweets.....");
  const allTweets = await twitterScraper(accounts[tweetCycle%22]);
  console.log(`${allTweets.length} tweets fetched`)

  console.log("Fetching all articles....");
  const allArticles = await websiteScraper(configs);
  console.log(`${allArticles.length} articles fetched`);

  // return {allArticles,allTweets};

  const searchForCryptoInTweets = allTweets.map((tweet) => {
    const text = tweet.postText;
    const possibleCryptos = findPossibleCryptos(text);
    tweet.possibleCryptos = possibleCryptos;
    return tweet;
  });

  const searchForCryptoInArticles = allArticles.map((article) => {
    const texts = article.details;
    const possibleCryptos = [];

    for (let i = 0; i < texts.length; i++) {
      const currCrypto = findPossibleCryptos(texts[i]);
      possibleCryptos.push(currCrypto);
    }
    article.possibleCryptos = [...new Set(possibleCryptos.flat())];
    return article;
  });

  const frequencyOfCryptos = new Map();

  searchForCryptoInArticles.forEach(article=>{
    article.possibleCryptos.forEach(crypto=>{
      if(frequencyOfCryptos.has(crypto)){
        frequencyOfCryptos.set(crypto,frequencyOfCryptos.get(crypto)+1);
      }else{
        frequencyOfCryptos.set(crypto,1);
      }
    })
  })

  searchForCryptoInTweets.forEach(tweet=>{
    tweet.possibleCryptos.forEach(crypto=>{
      if(frequencyOfCryptos.has(crypto)){
        frequencyOfCryptos.set(crypto,frequencyOfCryptos.get(crypto)+1);
      }else{
        frequencyOfCryptos.set(crypto,1);
      }
    })
  })

  


}

module.exports = { websiteScraper, twitterScraper, scraper, scraper_02 };
