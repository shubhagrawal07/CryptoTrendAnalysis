const { set } = require("mongoose");
const englishWords = require("../data/englishWords");
const knownTop100Cryptos = require("../data/knownCryptos");

function isInDictionary(word) {
  for (const keys of englishWords) {
    if (keys.toLowerCase() == word.toLowerCase()) return true;
  }
  return false;
}

function isAknown100Crypto(word) {
  return knownTop100Cryptos.some(
    crypto => crypto.name.toLowerCase() === word.toLowerCase() || crypto.symbol.toLowerCase() === word.toLowerCase()
  );
}


function findPossibleCryptos(para){
    const words = para.toLowerCase().split(/[^a-zA-Z]+/);
    const possibleCryptos=[];
    for(const word of words){
        if(!isAknown100Crypto(word) && !isInDictionary(word) && word.length>=3){
            possibleCryptos.push(word);
        }
    }

    const uniquePossibleCryptos = [...new Set(possibleCryptos)];

    return uniquePossibleCryptos;
}





module.exports = {findPossibleCryptos};

