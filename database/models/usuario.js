module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuario';

    let columnas = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: dataTypes.STRING   // este hay que agregarlo en la bbase de datos que no esta 
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
        fecha : {
            type: dataTypes.DATE
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

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Producto, {
            as : 'usuario_producto',
            foreignKey : 'infoUsuario_id'
        })

        Usuario.hasMany(models.Comentario, {
            as : 'usuario_comentario',
            foreignKey : 'infoUsuario_id'
        })
    }

    return Usuario
}