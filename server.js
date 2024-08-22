const express = require("express");
const dotenv = require("dotenv");
const cron = require("node-cron");

const { scraper } = require("./controllers/scraper");

const { accounts, configs } = require("./helper/configsScrapping");

const database = require("./config/database");

dotenv.config();

database();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let tweetCycle = 0;

cron.schedule('0 * * * *', async() => {
  console.log("Running the scheduled scapping script.....");
  const data = await scraper(accounts, configs,tweetCycle);
  tweetCycle++;
  res.json(data);
});

// app.get("/api/scrape", async (req, res) => {
//   console.log("Running the scheduled scapping script.....");
//   const data = await scraper(accounts, configs,tweetCycle);
//   tweetCycle++;
//   res.json(data);
// });

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
