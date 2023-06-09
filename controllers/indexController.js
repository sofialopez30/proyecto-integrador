let db = require("../database/models");
let Producto = db.Producto;
const Op = db.Sequelize.Op;

let indexController = {

    index: function (req, res) {

        db.Producto.findAll({
            include: [
                { association: 'producto_usuario' },
                { association: 'comentarios_producto', include: 'comentario_usuario' }
            ],
            order: [[
                'updatedAt', 'DESC'
            ]]
        })
            .then(arrayProductos => {
                res.render("index", {listado_cervezas: arrayProductos})
            })
            .catch(function (error) {
                res.send(error)
            });

    },
    searchResults: function (req, res) {

        let search = req.query.search

        Producto.findAll({
            where: {
                nombreProducto: {
                    [Op.like]: '%' + search + '%'
                }
            },
            include: [
                { association: 'producto_usuario' },
                { association: 'comentarios_producto', include: 'comentario_usuario' }
            ],
        })
            .then(function (producto) {
                res.render('search-results', { listado_cervezas: producto, busqueda: search });
            })
            .catch(function (error) {
                res.send(error)
            });
    },

};

module.exports = indexController;
 


// let listado_cervezas = require("../data/index"); 
// let db = require("../database/models");
// let Producto= db.Producto;
// const Op = db.sequelize.Op; 

// let indexController = {
    
//     index: function(req, res) {

//         db.Producto.findAll({
//             include : [
//                 {association : 'producto_usuario'},
//                 {association : 'producto_comentario', include : 'comentario_usuario'}
//             ],
//             order: [[
//                 'updatedAt', 'ASC'
//             ]]
//         })
//         .then(arrayProductos => {
//             //res.send(arrayProductos)
//             res.render("index", {listado_cervezas: arrayProductos})
//         })
//         .catch(err => res.send(err))

//     },
//     searchResults: function(req, res) {
//         let search= req.query.search
//         Producto.findAll({
//             where: {
//                 nombreProducto: {
//                   [Op.like]: `%${search}%`
//                 }
//               },
//               include: [
//                 {association: ' producto_usuario'},
//                 {association: ' producto_comentario', include:[' comentario_usuario']}
//               ], 
//         })
//         .then(function(producto){
//             res.render ('search-results', {listado_cervezas:producto});
//         })
//         .catch(err => res.send(err))
//     },

// };

// module.exports = indexController;