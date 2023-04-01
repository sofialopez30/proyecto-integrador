let productController = {

    index: function(req, res) {
        return res.render("index", {texto: "index"})
    },

    login: function(req, res) {
        return res.render("login", {texto: "login"})
    },

    product: function(req, res) {
        return res.render("product", {texto: "producto"})
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