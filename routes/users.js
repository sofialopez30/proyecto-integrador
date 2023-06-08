var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/profile-edit', userController.profileEdit);

//router.get('/profile-edit',)
// router.get('/profile-edit/:id', userController.editarPerfil); //editar perfil segun id
//necesito dos metodos. 

// falta hcaer uno que deje subir las cosas y guardarlas 


// BORAR // router.post('/profile/:id', userController.profileValidar) 

router.post('/login', userController.validarLogin);
router.post('/register', userController.registerUsuario); //toma los datos del formulario y los usa para crear el usuario en la base de datos

router.post('profile-edit', userController.editarPerfil);  // AGREGAR ESTE METODO EN USER CONTROLLER 

// BORRAR router.post('/loginGuardar', userController.validarLogin); // toma los datos del formulario de login y guarda en base de datos y de ahi los usa.

router.post('/logout', userController.logout);
router.post('/delete', userController.delete);

module.exports = router;
