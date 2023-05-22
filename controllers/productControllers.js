let listado_cervezas = require("../data/index"); 

let productController = {

    product: function(req, res) {

        let id = req.params.id;
        let cerveza; // declaro cerveza 
        for (let i = 0; i < listado_cervezas.length; i++) {
            if (listado_cervezas[i].id == id){
                cerveza = listado_cervezas[i];
            }
        }

        return res.render("product", {cerveza: cerveza, info: listado_cervezas, id: req.params.id}) 
    },

    productAdd: function(req, res) {
        return res.render("product-add", {})
    },


};

module.exports = productController;