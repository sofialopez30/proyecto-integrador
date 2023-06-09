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


// let listado_cervezas = require("../data/index");
// let db= require('../database/models') 
// let Producto= db.Producto;
// const Op= db.sequelize.Op; 

// let productController = {

//     product: function(req, res) {

//         let id = req.params.id;
//         Producto.findByPk(id, {
//             include: [
//                 {association : 'producto_usuario'},
//                 {association : 'producto_comentario', include : 'comentario_usuario'}
//             ]
//         })
//         // let cerveza; // declaro cerveza 
//         // for (let i = 0; i < listado_cervezas.length; i++) {
//         //     if (listado_cervezas[i].id == id){
//         //         cerveza = listado_cervezas[i];
//         //     }
//         // }  // esto habria que borrarlo 
//         .then (function(producto){
//             if (producto){
//                 res.render('product', {producto: producto}) // no se si esta bien producot: producto, no se si deberia ir nombreProducto
//             } else{
//                 res.send (' Este producto no se encuentra en nuestra web, prueba otra cosa!')
//             }
//         })
//         .catch(err => res.send(err))

        
//     },

//     productAdd: function(req, res) {   /// hay que hacer este que tire la base de datos
//         // agrego esto:
//         if (req.session.user) {
//             return res.render("product-add")
//         } else {
//             return res.redirect("/users/login")
//         } 
//         // return res.render("product-add", {})
//     },

//     // agrego esto:
//     procesarProductAdd: function(req, res){
//         // este metodo es para la ruta POST
//     },

//     //nueva entrega
//     comentar: function(req,res) {

//         // agregue:
//         if (req.session.user === undefined){
//             res.send("No esta logueado, no puede comentar")
//         }
//         /// 
        
//         let error = {};
//         if(res.locals.usuarioId){
//             db.Comentario.create({
//                 texto: req.body.text,
//                 infoUsuario_id : req.session.userId, //esto viene de los modelos  // para que funcionen vamos a tener que agregar esto en
//                                                      // el register o login form para que podamos tener el id del user :  req.session.userId = usuario.id;
//                 infoProducto_id: req.body.productId 
//             }).then(comentario =>{
//                 console.log(comentario)
//                 res.redirect('/product/:id' + req.body.productId)
//             }).catch(err=>{
//                 console.log(err)
//             })
//         }else{
//             error.message= 'Si deseas comentar, registarte!'            
//             res.locals.error=error    
//             res.redirect('/users/register')
//         }
//     },
 


// };

// module.exports = productController;