module.exports = (sequelize, dataTypes) => {

    let alias = 'Producto';

    let columnas = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreProducto : {
            type: dataTypes.STRING
        },
        imagen : {
            type: dataTypes.STRING
        },
        fechaDeCarga : {
            type: dataTypes.DATE
        },
        descripcionProducto : {
            type: dataTypes.STRING
        },
        infoUsuario_id : {
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
        tableName : 'infoProductos',
        timestamps : true,
        underscored : false
    }

    const Producto = sequelize.define(alias, columnas, configuraciones);

    Producto.associate = (models) => {
        Producto.belongsTo(models.Usuario, {
            as : 'producto_usuario',
            foreignKey : 'infoUsuario_id'
        })

        Producto.hasMany(models.Comentario, {
            as : 'producto_comentario',
            foreignKey : 'infoProducto_id'
        })
    }

    return Producto
}