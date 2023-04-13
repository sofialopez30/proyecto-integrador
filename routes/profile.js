let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

router.get("/", userController.profile)   // 
router.get("/edit", userController.profileEdit);
router.get("/id/:id", userController.profile);

module.exports = router;