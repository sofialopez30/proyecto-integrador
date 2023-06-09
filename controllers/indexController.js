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






// let db = require("../database/models");
// let Producto = db.Producto;
// const Op = db.Sequelize.Op;

// let indexController = {

//     index: function (req, res) {

//         db.Producto.findAll({
//             include: [
//                 { association: 'producto_usuario' },
//                 { association: 'comentarios_producto', include: 'comentario_usuario' }
//             ],
//             order: [[
//                 'updatedAt', 'DESC'
//             ]]
//         })
//             .then(arrayProductos => {
//                 res.render("index", {listado_cervezas: arrayProductos})
//             })
//             .catch(function (error) {
//                 res.send(error)
//             });

//     },
  

//     searchResults: function (req, res) {

//         let search = req.query.search
//         let buscar={
//             where: {
//                 nombreProducto: {
//                     [Op.like]: '%' + search + '%'
//                 }
//             },
//             order: [
//                 ['createdAt', 'DESC']
//             ],
//             include: [
//                 { association: 'producto_usuario' },
//                 { association: 'comentarios_producto', include: 'comentario_usuario' }
//             ]
//         }
//         let buscarPorDescripcion ={
//             where: {
//                 descripcionProducto: {
//                     [Op.like]: '%' + search + '%'
//                 }
//             },
//             order: [
//                     ['createdAt', 'DESC']
//                 ],
//             include: [
//                     { association: 'producto_usuario' },
//                     { association: 'comentarios_producto', include: 'comentario_usuario' }
//                 ]
            
//         }

//         db.Producto.findAll(buscar)
//         .then(function(resultados){
//             let err ={};
//             if (resultados.length != 0){
//                 res.render('search-results', {mostrar: resultados});
//             } else{
//                 db.Producto.findAll(buscarPorDescripcion)
//                 .then(function(resultados2){
//                     if (resultados2.length != 0){
//                         res.render('search-results', {mostrar: resultados2}); 
//                     }
//                     else{
//                         res.send('No se encontro el producto buscado. Proba devuelta!')
//                     }
//                 })
//                 .catch( function(error){
//                     console.log(error)
//                 })
                
//             }
//         }) .catch(function (error) {
//                 res.send(error)
//             });
//     },

// };

// module.exports = indexController;