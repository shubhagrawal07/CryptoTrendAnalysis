const fs = require("fs");

// const filePath =
//   "C:\\Users\\shuagrawal\\OneDrive - Conga\\Desktop\\Node\\PROJECTN037_XAVIER\\data\\words.txt";
// const englishWords = fs.readFileSync(filePath, "utf8").split("\n");

const rawData = fs.readFileSync("data\\data.json");
const data = JSON.parse(rawData);

const englishWords = data.englishWords;
console.log(englishWords);

function isInDictionary(word) {
  for (const keys of englishWords) {
    if (keys == word) return true;
  }
  return false;
}

function isCryptoAbbr(word) {
  return word === word.toUpperCase() && word.length === 3;
}

function checkForCryptos(para, possibleCryptos) {
  const words = para.split(/[^a-zA-Z]+/);
  //   const possibleCryptos = {};

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    if (
      !isInDictionary(word1.toLowerCase()) &&
      !isInDictionary(word2.toLowerCase()) &&
      word1 !== word2 &&
      word1.length >= 3 &&
      word2.length >= 3
    ) {
      if (isCryptoAbbr(word1)) {
        if (!possibleCryptos[word2.toLowerCase()]) {
          possibleCryptos[word2.toLowerCase()] = word1;
        }
      }
      if (isCryptoAbbr(word2)) {
        if (!possibleCryptos[word1.toLowerCase()]) {
          possibleCryptos[word1.toLowerCase()] = word2;
        }
      }
    }
  }

  //   return possibleCryptos;
}

// function main() {
//   const text1 = "This text does not contain any cryptos in it.";
//   const text2 =
//     "The price of bitcoin (BTC) fell sharply from a two-month high just shy of $72,000 in the minutes following the numbers. At press time, BTC was changing hands at $70,900, down 0.5% over the past 24 hours.";
//   const results = {};
//   checkForCryptos(text2, results);
//   Object.entries(results).forEach(([key, value]) => {
//     const name = key;
//     const abbr = value;

//     console.log(name, value);
//   });
// }

// main();

module.exports = checkForCryptos;
