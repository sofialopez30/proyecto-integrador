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


    // a partir de aca son los de esta entrega no voy a tocar los otros
    profileValidar: (req, res) => {
      
        res.redirect('/profile/:id' + req.session.userId)

   
    },
    registerUsuario: (req, res) => {
      
            res.redirect('/profile/:id' + req.session.userId)
    
       
    },
    validarLogin: (req, res) => {
        // Filtramos el usuario a traves de un campo que sea UNICO en la base de datos
        let buscoUsuario = {
            where: { 
                usuario: req.body.name
            }
        }
        // Buscamos el usuario que deberia ser unico
        db.Usuario.findOne(buscoUsuario).then(usuario => {
            // hay que comparar la contraseña ingresada en el login 
            // con la que ingresada en el registro 

            if(usuario == null){ // busca si el usuario ingresado es el mismo
                let error = "El usuario o la contraseña no son correctos"
                res.render('login', {error:error})
            } else if (bcrypt.compareSync(req.body.password, usuario.password) == false){ //busca si la constarna es la misma
                let error = "El usuario o la contraseña no son correctos"
                res.render('login', {error:error})
            } else {
                req.session.usuario = {
                    nombre: usuario.nombre_apellido, 
                    usuario: usuario.usuario,
                    id: usuario.id
                }
                req.session.userId = usuario.id;
                
                //guardo lo que nescesito en la sesion
               
                // En caso de que haya seleccionado recodarme, guardamos una cookie (check)
                if(req.body.remember){
                    res.cookie('userId', usuario.id, {}); //guarda la cookie, que se define del lado del cliente, en este caso mi objeto seria 'userId' (el nombre de la cookie)
                }
                res.redirect('./profile/' + usuario.id);
            }
    }).catch(err =>{
        console.log(err)
    });
    },

    logout: (req, res) => {
        // Borramos la sesion del servidor
        req.session.destroy();
        // Eliminamos la cookie del cliente
        res.clearCookie('userId');
        res.redirect('/');
    }

};

module.exports = userController;