let listado_cervezas = require("../data/index"); 

let indexController = {
    
    index: function(req, res) {
        return res.render("index", {listado_cervezas: listado_cervezas})
    },
    searchResults: function(req, res) {
        return res.render("search-results",{listado_cervezas: listado_cervezas})
    },

};

module.exports = indexController;