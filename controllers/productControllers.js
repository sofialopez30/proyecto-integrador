let db = require('../database/models')
let Usuario = db.Usuario;
let Producto = db.Producto;
let Comentario = db.Comentario;

let productController = {

    product: function (req, res) {

        let id = req.params.id;
        
        Producto.findByPk(id, {
            include: [
                { association: 'producto_usuario' },
                { association: 'comentarios_producto', include: 'comentario_usuario' }
            ]
        })
            .then(function (producto) {
                if (producto) {
                    res.render('product', { producto : producto }) 
                } else {
                    res.send(' Este producto no se encuentra en nuestra web, prueba otra cosa!')
                }
            })
            .catch(function (err) {
                res.send(err)
            })
    },

    productAdd: function (req, res) {   
        if (req.session.user) {
            return res.render("product-add")
        } else {
            return res.redirect("/users/login")
        }
    },

    procesarProductAdd: function (req, res) {
        let nombreProducto = req.body.nombreProducto;
        let descripcionProducto = req.body.descripcionProducto;
        let imagenProducto = '/images/products/' + req.body.imagen;
        
        let infoUsuario_id = req.session.user.id;

        Producto.create({
            nombreProducto: nombreProducto,
            descripcionProducto: descripcionProducto,
            imagen: imagenProducto,
            infoUsuario_id: infoUsuario_id
        })
            .then(function (resultado) {
                res.redirect("/product/" + resultado.id)
            })
            .catch(function (err) {
                res.send(err)
            })
    },

    comentar: function (req, res) {
        if (req.session.user) {
            let comentario = req.body.comentario;
    
            Comentario.create({
                comentario: comentario,
                infoUsuario_id: req.session.user.id,
                infoProducto_id: req.params.id
            })
                .then(function (resultado) {
                    res.redirect("/product/" + req.params.id)
                })
                .catch(function (err) {
                    res.send(err)
                })
        } else {
            res.send("No está logueado, no puede comentar")
        }

    },

    eliminarProducto: function(req, res) {
        let idPorducto = req.params.id;

        Usuario.findByPk(req.session.user.id)
            .then(function (usuario) {
                if (usuario) {
                    if (usuario.id == req.session.user.id) {
                        Producto.destroy({
                            where: {
                                id: idPorducto
                            },
                            force: true
                        })
                            .then(function () {
                                res.redirect("/users/profile")
                            })
                            .catch(function (err) {
                                res.send(err)
                            })
                    } else {
                        res.send("No tiene permisos para eliminar este producto")
                    }
                } else {
                    res.send("No se encuentra el usuario")
                }
            })
            .catch(function (err) {
                res.send(err)
            });
    },

    editarProducto: function (req, res) {
        if (req.session.user) {
            res.render('product-edit')
        } else {
            res.redirect("/users/login")
        }
    },

    procesarEditarProducto: function (req, res) {
        let idProducto = req.params.id;
        let nombreProducto = req.body.nombreProducto;
        let descripcionProducto = req.body.descripcionProducto;
        let imagenProducto = '/images/products/' + req.body.imagen;

        Producto.update({
            nombreProducto: nombreProducto,
            descripcionProducto: descripcionProducto,
            imagen: imagenProducto
        }, {
            where: {
                id: idProducto
            }
        })
            .then(function () {
                res.redirect("/product/" + idProducto)
            })
            .catch(function (err) {
                res.send(err)
            })
    }
};

module.exports = productController;