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

    //nueva entrega
    comentar: function(req,res) {
        let error = {};
        if(res.locals.usuarioId){
            db.Comentarios.create({
                texto: req.body.text,
                infoUsuario_id : req.session.userId, //esto viene de los modelos  // para que funcionen vamos a tener que agregar esto en
                                                     // el register o login form para que podamos tener el id del user :  req.session.userId = usuario.id;
                infoProducto_id: req.body.productId 
            }).then(comentario =>{
                console.log(comentario)
                res.redirect('/product/' + req.body.productId)
            }).catch(err=>{
                console.log(err)
            })
        }else{
            error.message= 'Si deseas comentar, registarte!'            
            res.locals.error=error    
            res.redirect('/register/')
        }
    },
 


};

module.exports = productController;