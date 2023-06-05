let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/:id", productController.product);  
router.get("/product-add/:id", productController.productAdd); 

router.post('/comentar', productController.comentar);

module.exports = router;

