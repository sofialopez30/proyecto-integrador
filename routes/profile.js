let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/", productController.profile);

router.get("/edit", productController.profileEdit);

module.exports = router;