let listado_cervezas = require("../data/index"); // aca traje la lista de cervezas

let productController = {

    index: function(req, res) {
        return res.render("index", {listado_cervezas: listado_cervezas})
    },

    login: function(req, res) {
        return res.render("login", {texto: "login"})
    },

    product: function(req, res) {
        let id = req.params.id  
        let cerveza 
        for (let i = 0; i < listado_cervezas.length; i++) {
            if (listado_cervezas[i].id == id){
                cerveza = listado_cervezas[i]
            }
        }

        return res.render("product", {texto: "producto", cerveza : cerveza}) // le paso una variable que se llama cerveza y tiene la info que me pediste
    },

    productAdd: function(req, res) {
        return res.render("product", {texto: "product add"})
    },

    register: function(req, res) {
        return res.render("register", {texto: "register"})
    },

    profile: function(req, res) {
        return res.render("profile", {texto: "profile"})
    }, 

    profileEdit: function(req, res) {
        return res.render("profile", {texto: "profile edit"})
    }

};

module.exports = productController;