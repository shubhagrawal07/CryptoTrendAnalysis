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
  // Add more configurations for other websites
];

module.exports = configs;
