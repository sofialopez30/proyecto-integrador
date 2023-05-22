var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/profile-edit', userController.profileEdit);

module.exports = router;
