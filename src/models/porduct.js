module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vendorId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },
        discountPercentage: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    });
    Product.associate = (models) => {
        Product.hasMany(models.cartitem, {
          foreignKey: 'productId'
        });
    
        Product.belongsToMany(models.cart, {
          through: models.cartitem,
          foreignKey: 'productId'
        });
    
        Product.hasMany(models.productImage, {
          foreignKey: 'productId'
        });

        Product.belongsToMany(models.order,{
            through: models.orderitem
        });
      };
    

    return Product;
}