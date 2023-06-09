var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile-edit', userController.profileEdit);

router.post('/login', userController.validarLogin); // toma los datos del formulario de login y guarda en base de datos y de ahi los usa
router.post('/register', userController.registerUsuario); //toma los datos del formulario y los usa para crear el usuario en la base de datos
router.post('/logout', userController.logout);
router.post('/profile-edit', userController.editarPerfil); //toma los datos del formulario y los usa para editar el usuario en la base de datos

router.get('/profile/:id', userController.profile);

module.exports = router;
