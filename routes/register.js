let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/", productController.register);

module.exports = router;