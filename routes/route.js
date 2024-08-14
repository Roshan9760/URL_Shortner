const express = require('express');
const {
  handleGenerateNewShortUrl,
  redirectToURL,
  handleAnalytics,
} = require("../controllers/urlController");

const router = express.Router();


router.post('/',handleGenerateNewShortUrl)
router.get("/:shortId", redirectToURL);
router.get("/analytics/:shortId", handleAnalytics);


module.exports = router