let bcrypt = require('bcryptjs');
let db = require('../database/models');
let Usuario = db.Usuario;

let userController = {

    login: function (req, res) {
        if (req.session.user) {
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },
    
    validarLogin: (req, res) => {

        db.Usuario.findOne({
            where: {
                user: req.body.usuario //no se si aca va user o va usuario
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
                    } else {
                        return res.render('login', { error: 'La contraseña no es correcta' })
                    }
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

        db.Usuario.create({
            email: req.body.email,
            user: req.body.usuario,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
            fotoPerfil: '/images/users/' + req.body.imagen,
            fecha: req.body.fechaNac,
            numDocumento: req.body.numeroDocumento
        })
            .then(function (usuarioCreado) {
                return res.redirect('/users/login');
            })
            .catch(function (err) {
                res.send(err);
            });
    },

    profile: function (req, res) {

        let id = req.params.id;

        Usuario.findByPk(id, {
            include: [
                { association: 'productos_usuario', include: {
                    association: 'comentarios_producto', include: 'comentario_usuario' }
                },
            ]
        })
            .then(function (user) {
                if (user) {
                    res.render('profile', { user : user });
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
            contrasenia: bcriptjs.hashSync(req.body.contrasenia, 10),
            fotoPerfil: '/images/users/' + req.body.imagen,
            fecha: req.body.fechaNac,
            numDocumento: req.body.numeroDocumento
        })
            .then(function (usuarioActualizado) {
                return res.redirect('/users/profile/' + usuarioActualizado.id);
            })
            .catch(function (err) {
                res.send(err);
            });
    },
    logout: function(req,res) {
        req.session.destroy();
        res.clearCookie('usuario');
        res.redirect('/');
    },
};

module.exports = userController;