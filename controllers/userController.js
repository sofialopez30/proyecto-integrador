let listado_cervezas = require("../data/index"); 
let db= require ('../database/models')
let Usuario = db.Usuario

let userController = {


    
    login: function(req, res) {
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },

    register: function(req, res) {
        return res.render("register", {})
    },

    profile: function(req, res) {
        
        let id = req.params.id; 
        Usuario.findByPk(id, {
            include: [
                {association : 'user_product'},
                {association : 'producto_comentario', include : 'comentario_usuario'}
            ]
        })
        .then (function(user){
            if (user){
                res.render ('profile', {user:user});
            } else{
                res.send (' Este usuario no existe')
            }
        })
        //console.log(listado_cervezas[0]);
       
        //return res.render("profile", { info: listado_cervezas, id: req.params.id, listado_cervezas: listado_cervezas})
    }, 

    profileEdit: function(req, res) {
        return res.render("profile-edit", {})
    },


    // a partir de aca son los de esta entrega no voy a tocar los otros
    profileValidar: (req, res) => {
      
        res.redirect('/profile/:id' + req.session.userId)

   
    },
   
    registerUsuario: function(req, res){
        let form = req.body

        //Encriptar la contraseña antes de guardar en la base de datos.
        let user = { //aca agarro el nombre que pusimos en los modelos y lo del al lado tomo la informacion del form con el name que le pusimos en cada label
            email:form.email,
            user:form.usuario, 
            contrasenia: form.contrasenia,
            fotoPerfil: form.img,
            fecha: form.fechaNac,
            numDocumento: form.numeroDocumento
        }
        //Usar un método de Sequelize para guardar datos.
        db.Usuario.create(user) //Pasar un objeto literal con los datos a guardar.
            .then(function(usuarioCreado){ //retorna el elemento creado
                //Dentro del then debería redireccionar a otra ruta.
                console.log(usuarioCreado);
                    // return res.send(form);
                return res.redirect('/');
            })
            .catch(function(e){
                console.log(e);
            })
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
    },
    delete:function(req, res){
        //Tendremos que pensar el código del controlador dependiendo de qué estrategia usemos para identificar el id del elemento a borrar. En este caso estamos usando la estrategia del campo hidden dentro del formulario. 
        let id = req.body.id;

        // return res.send(id);

        db.Usuario.destroy({
            where: { id:id }
        })
            .then(function(){
                return res.redirect('/');
            })
            .catch(function(e){
                console.log(e);
            })

    }

};

module.exports = userController;