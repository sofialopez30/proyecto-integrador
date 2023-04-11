let listado_cervezas = require("../data/index"); 

let userController = {
    
    login: function(req, res) {
        return res.render("login", {})
    },

    register: function(req, res) {
        return res.render("register", {})
    },

    profile: function(req, res) {
        
        let id = req.params.id; 
        console.log(listado_cervezas[0]);
       
        return res.render("profile", { info: listado_cervezas, id: req.params.id, listado_cervezas: listado_cervezas})
    }, 

    profileEdit: function(req, res) {
        return res.render("profile-edit", {})
    },

};

module.exports = userController;