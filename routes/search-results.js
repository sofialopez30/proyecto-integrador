var express = require('express');
var router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/", productController.searchResults);

module.exports = router;