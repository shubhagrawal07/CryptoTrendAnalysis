const englishWords = require("../data/englishWords");
const knownTop100Cryptos = require("../data/knownCryptos");

function isInDictionary(word) {
  for (const keys of englishWords) {
    if (keys == word) return true;
  }
  return false;
}

function isAknown100Crypto(word) {
  return knownTop100Cryptos.some(
    crypto => crypto.name.toLowerCase() === word.toLowerCase() || crypto.symbol.toLowerCase() === word.toLowerCase()
  );
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
      word2.length >= 3 &&
      word1[0]==word2[0] &&
      !isAknown100Crypto(word1)&&
      !isAknown100Crypto(word2)
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

}


module.exports = checkForCryptos;
