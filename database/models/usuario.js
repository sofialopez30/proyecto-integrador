module.exports = function(sequelize, dataTypes){

    let alias = 'Usuario'; 
 
    let columnas = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: dataTypes.STRING   
        },
        email : {
            type: dataTypes.STRING
        }, 
        contrasenia : {
            type: dataTypes.STRING
        }, 
        fotoPerfil : {
            type: dataTypes.STRING
        }, 
        numDocumento : {
            type: dataTypes.INTEGER
        }, 
        createdAt : {
            type: dataTypes.DATE
        },
        updatedAt : {
            type: dataTypes.DATE
        }
    };

    let configuraciones = {
        tableName : 'infoUsuarios',
        timestamps : true,
        underscored : false
    }

    const Usuario = sequelize.define(alias, columnas, configuraciones);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as : 'productos_usuario',
            foreignKey : 'infoUsuario_id'
        })

        Usuario.hasMany(models.Comentario, {
            as : 'comentarios_usuario',
            foreignKey : 'infoUsuario_id'
        })
    }

    return Usuario
}