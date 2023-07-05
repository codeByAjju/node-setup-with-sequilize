module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("cartitem",{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    });
    CartItem.associate = (models) => {
        CartItem.belongsTo(models.product, {
          foreignKey: "productId",
          targetKey: "id",
        })
    }
    return CartItem;    
};
