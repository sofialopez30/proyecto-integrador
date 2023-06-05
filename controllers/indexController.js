let listado_cervezas = require("../data/index"); 
let db = require("../database/models");

let indexController = {
    
    index: function(req, res) {

        db.Producto.findAll({
            include : [
                {association : 'producto_usuario'},
                {association : 'producto_comentario', include : 'comentario_usuario'}
            ]
        })
        .then(arrayProductos => {
            // res.send(arryaProductos)
            res.render("index", {listado_cervezas: arrayProductos})
        })
        .catch(err => res.send(err))

    },
    searchResults: function(req, res) {
        return res.render("search-results",{listado_cervezas: listado_cervezas})
    },

};

module.exports = indexController;