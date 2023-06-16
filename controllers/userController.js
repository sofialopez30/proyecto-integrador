let bcrypt = require('bcryptjs')
let db = require('../database/models');
const { or } = require('sequelize');
let Usuario = db.Usuario

let userController = {

    login: function (req, res) {
        if (req.session.user) {
            return res.redirect('/');
        } else {
            return res.render('login');
        }
    },

    
    validarLogin: function(req, res){

        let form= req.body
        usuario = form.usario
        contrasenia = form.contrasenia;


        db.Usuario.findOne({
            where: {
                user: req.body.usuario 
            }
        })
        .then(function(usuario) {
            if (usuario) {
                if (bcrypt.compareSync(req.body.contrasenia, usuario.contrasenia)) {
                    
                    req.session.user = {
                        id: usuario.id,
                        user: usuario.user,
                        email: usuario.email,
                    };
    
                    if (req.body.remember) {
                        res.cookie('usuario', usuario.id, { maxAge: 1000 * 60 * 60 * 24 * 7 })
                    } 
    
                    return res.redirect('/')
                 } 
                 if (req.body.contrasenia != bcrypt.compareSync){
                    return res.send(' la contrasena es incorrecta');
                    
                 }
                 
                } else {
                    return res.send (' el nombre de usuario es incorrecto')
                 }
            })
            .catch(function (err) {
                res.send(err)
            });
    },

    register: function (req, res) {
        if (req.session.user) {
            return res.redirect('/')
        } else {
            return res.render("register")
        }
    },

    registerUsuario: function (req, res) {
        if (req.body.contrasenia.length < 3) {
            res.send('La contraseña debe tener al menos 3 caracteres')
          }
        if (req.body.email == ''){
            res.send('Debe ingresar un email')
        }
      
        Usuario.findOne({
            where: {
            email: req.body.email
            }
        })
        .then(function (user) {
             if (user == null) {
              db.Usuario.findOne({
                 where: {
                   user: req.body.usuario
                 }
               })
                .then(function (user) {
                 if (user == null) {
                   db.Usuario.create({
                     email: req.body.email,
                     user: req.body.usuario,
                     contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                     fotoPerfil: '/images/users/' + req.body.imagen,
                      fecha: req.body.fechaNac,
                      numDocumento: req.body.numeroDocumento
                   })
                   .then(function (resultado) {
                    res.redirect('/users/login')
                  })
                  .catch(function (error) {
                    res.send(error)
                  })
              } else {
                res.send('El nombre de usuario ya existe')
              }
            })
            .catch(function (error) {
              res.send(error)
            })
        } else {
          res.send('El email ya existe')
        }
      })
      .catch(function (error) {
        res.send(error)
      })
  },
      

    profile: function (req, res) {

        let id = req.params.id;

        db.Usuario.findByPk(id, {
            include: [
                { association: 'productos_usuario', include: {
                    association: 'comentarios_producto', include: 'comentario_usuario' }
                },
            ],
            order: [[
                'createdAt', 'DESC'
            ]]
        })
            .then(function (user) {
                if (user) {
                    res.render('profile', { usuario : user });
                } else {
                    res.send('Este usuario no existe')
                }
            })
            .catch(function (err) {
                res.send(err);
            });
    },

    profileEdit: function (req, res) {
        if (req.session.user) {
            return res.render("profile-edit")
        } else {
            return res.redirect('/')
        }
    },

    editarPerfil: function (req, res) {
        db.Usuario.update({
            email: req.body.email,
            user: req.body.usuario,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
            fotoPerfil: '/images/users/' + req.body.imagen,
            fecha: req.body.fechaNac,
            numDocumento: req.body.numeroDocumento
        },{
            where: {'id': req.session.user.id}
        })
            .then(function (usuarioActualizado) {
                return res.redirect('/users/profile/' + req.session.user.id);
            })
            .catch(function (err) {
                res.send(err);
            });
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('usuario');
        res.redirect('/');
    },
};

module.exports = userController;