module.exports = (sequelize, dataTypes) => {

    let alias = 'Comentario';

    let columnas = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cometario : {
            type: dataTypes.STRING
        },
        infoUsuario_id : {
            type: dataTypes.INTEGER
        },
        infoProducto_id : {
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
        tableName : 'comentarios',
        timestamps : true,
        underscored : false
    }

    const Comentario = sequelize.define(alias, columnas, configuraciones);

    Comentario.associate = (models) => {
        Comentario.belongsTo(models.Usuario, {
            as : 'comentario_usuario',
            foreignKey : 'infoUsuario_id'
        })

        Comentario.belongsTo(models.Producto, {
            as : 'comentario_producto',
            foreignKey : 'infoProducto_id'
        })
    }

    return Comentario
}