const express = require("express");
const websiteScraper = require("../controllers/websiteScraper");

const router = express.Router();

router.get("/website", websiteScraper);

module.exports = router;
