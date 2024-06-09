const express = require("express");
const dotenv = require("dotenv");
const scraper = require("./routes/scraperRoutes");

const database = require("./config/database");

dotenv.config();

database();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/scraper", scraper);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
