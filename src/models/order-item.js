module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define("orderitem",{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    });
    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.product, {
          foreignKey: "productId",
          targetKey: "id",
        })
    }
    return OrderItem;    
};
