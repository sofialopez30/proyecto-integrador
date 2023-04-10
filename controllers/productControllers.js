let listado_cervezas = require("../data/index"); 

let productController = {

    index: function(req, res) {
        return res.render("index", {listado_cervezas: listado_cervezas})
    },

    login: function(req, res) {
        return res.render("login", {})
    },

    product: function(req, res) {

        let id = req.params.id;
        let cerveza;
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

    register: function(req, res) {
        return res.render("register", {})
    },

    profile: function(req, res) {
        
        let id = req.params.id; 
        let info_usuario;
        for (let i = 0; i < listado_cervezas.length; i++) {
            if (listado_cervezas[i].id == id) {
                info_usuario = listado_cervezas[i].usuario;
            
            }
        }
        return res.render("profile", {info_usuario: info_usuario, info: listado_cervezas, id: req.params.id, listado_cervezas: listado_cervezas})
    }, 

    profileEdit: function(req, res) {
        return res.render("profile-edit", {})
    }

};

module.exports = productController;