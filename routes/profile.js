let express = require("express");
let router = express.Router();
let productController = require("../controllers/productControllers");

router.get("/edit", productController.profileEdit);
router.get("/id/:id", productController.profile);

module.exports = router;