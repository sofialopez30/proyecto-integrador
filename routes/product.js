let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/", productController.product);

router.get("/add", productController.productAdd);

module.exports = router;