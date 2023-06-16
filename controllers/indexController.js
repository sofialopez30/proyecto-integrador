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
            .then(function(arrayProductos){
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
            order: [[
                'updatedAt', 'DESC'
            ]]
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






