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
{
  source: "Liquid Blog",
  url: "https://www.blog.liquid.com",
  articleSelector: "article",
  titleSelector: "h1",
  urlSelector: "a",
  summarySelector: "h1",
  baseUrl: "https://www.blog.liquid.com",
  header: {}
},
{
  source: "Litecoin Foundation Blog",
  url: "https://www.litecoin.net/news",
  articleSelector: ".collection-item-2",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: ".paragraph-2",
  baseUrl: "https://www.litecoin.net",
  header: {}
},
{
  source: "LocalBitcoins Blog",
  url: "https://localbitcoins.com/blog/",
  articleSelector: ".blogpost-contents",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "https://localbitcoins.com",
  header: {}
},
{
  source: "Luno Blog",
  url: "https://discover.luno.com/category/news/",
  articleSelector: "article",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "",
  header: {}
},
{
  source: "Monero Blog",
  url: "https://getmonero.org/blog",
  articleSelector: ".post-lead",
  titleSelector: "h3",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "https://getmonero.org",
  header: {}
},
{
  source: "Naxo Blog",
  url: "https://nexo.io/blog",
  articleSelector: ".border-t-1",
  titleSelector: "h3",
  urlSelector: "a",
  summarySelector: "h3",
  baseUrl: "",
  header: {}
},
{
  source: "Pundi X Blog",
  url: "https://blog.pundix.com/",
  articleSelector: "article",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "",
  header: {}
},
{
  source: "Ripple Insights",
  url: "https://ripple.com/insights/",
  articleSelector: ".my-2",
  titleSelector: "p",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "https://ripple.com",
  header: {}
},
{
  source: "Solana Blog",
  url: "https://solana.com/blog",
  articleSelector: "a",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "https://solana.com",
  header: {}
},
{
  source: "Stellar Blog",
  url: "https://stellar.org/blog",
  articleSelector: '.sc-f34a51bd-0',
  titleSelector: "h3",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "https://stellar.org",
  header: {}
},
{
  source: "Gemini Blog",
  url: "https://gemini.com/blog",
  articleSelector: ".sc-c343aa45-0",
  titleSelector: "h4",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "https://gemini.com",
  header: {}
},
{
  source: "Golem Network Blog",
  url: "https://blog.golem.network",
  articleSelector: "article",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: ".post-card-excerpt",
  baseUrl: "https://blog.golem.network",
  header: {}
},
{
  source: "Hyperledger Blog",
  url: "https://hyperledger.org/blog",
  articleSelector: "article",
  titleSelector: "h3",
  urlSelector: "a",
  summarySelector: ".blog-post__description",
  baseUrl: "",
  header: {}
},
{
  source: "Kraken Blog",
  url: "https://blog.kraken.com",
  articleSelector: "article",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: "p",
  baseUrl: "",
  header: {}
},
{
  source: "Ledger Insights",
  url: "https://ledgerinsights.com",
  articleSelector: "article",
  titleSelector: "h2",
  urlSelector: "a",
  summarySelector: "h2",
  baseUrl: "",
  header: {}
},
  // Add more configurations for other websites
];

const accounts = [
  [
    "CryptoStSign",
    "TheCryptoLark",
    "CryptoGodJohn",
    "BlessedManish",
    "coinmastermind_",
  ],
  [
    "AlexMaestro2022",
    "johnnycrypto_2",
    "Sanemavcil",
    "TheCryptoAlche9",
    "BarzizCrypto",
  ],
  [
    "M_Miillss",
    "Crypto1Nakamoto",
    "CryptoKev89",
    "realW3BT",
    "CryptoBullRon"
  ],
  ["army_shiba",
    "algos_in_crypto",
    "Crypto_Bluerail",
    "0xHedge32",
    "0xHuge"
  ],
  [
    "24hrscrypto1",
    "55GEM",
    "6IXTH7ENSE",
    "future_isCrypto",
    "A2E_A2E",
  ]
  ,
  [
    "Aaron_MOC",
    "0xPapill0n",
    "Ace0fTrades",
    "TheRealADABoyz",
    "AdamCharlesMKT",
  ],
  [
    "ACelia32",
    "CryptoPilotAdam",
    "Adri_crypto",
    "adryenn",
    "Afri_bull",
  ]
  ,
  [
    "Ainvest_Wire",
    "AirdropAchiever",
    "Zen_Trades1",
    "Alacryp1",
    "AlchemyPayNews_",
  ],
  ,
  [
    "Aleecoino",
    "amelen",
    "AllFactsCrypto",
    "AlmiraCrypto",
    "AlphAirdrop",
  ]
  ,
  [
    "Malik_Farooq_01",
    "AlphaPackedHQ",
    "altcobrapro",
    "AltCommunity07",
    "AltcoinDailyio",
  ]
  ,
  [
    "AltcoinDailyio",
    "AltGemsAlert",
    "altcobrapro",
    "Altsteinn",
    "alex_dyan1",
  ]
  ,
  [
    "RuleXRP",
    "0xAmol",
    "Amrhamed80",
    "AThrouvalas",
    "DuboisCrypto",
  ],
  ,
  [
    "AngryGadget",
    "ApeChartz",
    "anilsingta",
    "_snuppy08",
    "Kirbyz007",
  ]
  ,
  [
    "4riana_crypto",
    "CryptoVenture3",
    "CryptoVenture3",
    "KumaAshley",
    "eCoinIncome",
  ]
  ,
  [
    "austinahilton",
    "AusCryptoReport",
    "CryptoAyda",
    "azbit_news",
    "Azianoona",
  ]
  ,
  [
    "BadwiCrypto",
    "NftBahar",
    "Ba1i9ee",
    "BapeWeb3",
    "BarzizCrypto",
  ]
  ,
  [
    "888J9",
    "BaseArmy2023",
    "BaseArmy2023",
    "0xBB3",
    "bevanduynew",
  ]
  ,
  [
    "Beached_Whale24",
    "belufrancese",
    "bemweezy15",
    "BenBuckwalter",
    "BentoBoiNFT",
  ],
  [
    "BinanceArmy100x",
    "binancespotTeam",
    "BiscuitDao",
    "Bish_Bhandari",
    "Bitbullweb3",
  ]
  ,
  [
    "bitcoin_duniya",
    "btcExpressNews",
    "BitcoinMktJrnl",
    "BTC_Revolution",
    "BitcoinBazis",
  ]
  ,
  [
    "BitcolumnistX",
    "bites_xyz",
    "BitmonkCrypto",
    "BitrueOfficial",
    "BlanqChequez01",
  ]
  ,
  [
    "Crypto_Blesin",
    "BLOCKCHAINALETS",
    "BlockchainNewsM",
    "LeaksBlockchain",
    "BlockFi",
  ],
];

module.exports = { configs, accounts };
