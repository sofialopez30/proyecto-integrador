let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/product-add", productController.productAdd);

router.post("/product-add", productController.procesarProductAdd);

router.get("/:id", productController.product);
router.get("/product-edit/:id", productController.editarProducto);

router.post("/product-edit/:id", productController.procesarEditarProducto);
router.post('/comentar/:id', productController.comentar);
router.post("/eliminar/:id", productController.eliminarProducto);

module.exports = router;