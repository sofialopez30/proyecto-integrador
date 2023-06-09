let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/product-add", productController.productAdd);

router.post("/product-add", productController.procesarProductAdd);

router.get("/:id", productController.product);

router.post('/comentar/:id', productController.comentar);

module.exports = router;






// let express = require("express");
// let router = express.Router();
// let productController = require("../controllers/productControllers");

// router.get("/:id", productController.product);  
// router.get("/product-add/:id", productController.productAdd); 

// router.post('/comentar', productController.comentar);

// module.exports = router;

