let db = require('../database/models')
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
                    res.render('product', { producto : producto }) // no se si esta bien producot: producto, no se si deberia ir nombreProducto
                } else {
                    res.send(' Este producto no se encuentra en nuestra web, prueba otra cosa!')
                }
            })
            .catch(function (err) {
                res.send(err)
            })
    },

    productAdd: function (req, res) {   /// hay que hacer este que tire la base de datos
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
};

module.exports = productController;
