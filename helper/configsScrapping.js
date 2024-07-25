// Configuration for different websites
const configs = [
  {
    source: "CoinDesk",
    url: "https://www.coindesk.com/livewire",
    articleSelector: ".side-cover-card",
    titleSelector: "a",
    urlSelector: "a",
    summarySelector: ".hhvHmp",
    baseUrl: "https://www.coindesk.com",
  },
  {
    source: "Decrypt",
    url: "https://decrypt.co/news-explorer",
    articleSelector: ".border-b-0",
    titleSelector: "h4",
    urlSelector: "a",
    summarySelector: "p",
    baseUrl: "",
  },
  {
    source: "Uniswap Blog",
    url: "https://uniswap.org/blog",
    articleSelector: ".feed__Post-sc-viqlp4-2",
    titleSelector: "p",
    urlSelector: "a",
    summarySelector: ".Type__SubTitle-sc-ga2v53-3",
    baseUrl: "https://uniswap.org",
    header: {}
  },
  {
    source: "Trust Wallet Blog",
    url: "https://trustwallet.com/blog",
    articleSelector: "li",
    titleSelector: "h5",
    urlSelector: "a",
    summarySelector: "p",
    baseUrl: "https://trustwallet.com/",
    header: {}
  },
  {
    source: "Zerion Blog",
    url: "https://zerion.io/blog",
    articleSelector: "article",
    titleSelector: "h4",
    urlSelector: "a",
    summarySelector: "p",
    baseUrl: "https://zerion.io",
    header: {}
  },
  {
    source: "Wirex Blog",
    url: "https://wirexapp.com/blog/latest",
    articleSelector: ".wxom-article-item",
    titleSelector: "h5",
    urlSelector: ".wxom-article-item",
    summarySelector: ".wxom-post-description",
    baseUrl: "https://wirexapp.com",
    header: {}
  },
  {
    source: "Xapo Blog",
    url: "https://www.xapobank.com/en/insider",
    articleSelector: ".Partials-PostCard",
    titleSelector: ".card-title",
    urlSelector: "a",
    summarySelector: ".card-title",
    baseUrl: "https://www.xapobank.com/",
    header: {}
},
  {
    source: "Zilliqa Blog",
    url: "https://blog.zilliqa.com",
    articleSelector: "article",
    titleSelector: "h2",
    urlSelector: "a",
    summarySelector: "p",
    baseUrl: "https://blog.zilliqa.com",
    header: {}
},
{
    source: "Balancer",
    url: "https://medium.com/balancer-protocol",
  articleSelector: "article",
  titleSelector: "h2",
  urlSelector: 'div[role="link"]',
  summarySelector: "h3",
  baseUrl: "",
  header: {}
},
{
  source: "bitcoin",
  url: "https://blog.bitcoin.com",
  articleSelector: ".u-size4of12",
  titleSelector: "h3",
  urlSelector: "a",
  summarySelector: "a",
  baseUrl: "",
  header: {}
},
  // Add more configurations for other websites
];

const accounts = [
  "CryptoStSign",
  "TheCryptoLark",
  "CryptoGodJohn",
  "BlessedManish",
  "coinmastermind_",
  "AlexMaestro2022",
  "johnnycrypto_2",
];

module.exports = { configs, accounts };
