let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/:id", productController.product);  // agregue el :id


// router.get("/product-add", productController.productAdd);

module.exports = router;

