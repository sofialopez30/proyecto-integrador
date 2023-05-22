var express = require('express');
var router = express.Router();
let indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/search-results", indexController.searchResults);

module.exports = router;
