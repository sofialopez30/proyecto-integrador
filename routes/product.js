let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/:id", productController.product);  

module.exports = router;

