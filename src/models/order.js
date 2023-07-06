module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        contactPerson:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contactNumber:{
            type: DataTypes.STRING,
            allowNull: false
        },
        deliveryAddress:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date:{
            type: DataTypes.STRING,
            defaultValue: new Date().toString().substring(4,15).replaceAll(' ','-')
        },
        billAmount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentMode:{
            type: DataTypes.STRING,
            defaultValue: "COD"
        },
        status:{
            type: DataTypes.STRING,
            defaultValue: "Received"
        }
    });

    Order.associate = (models)=>{
        Order.belongsTo(models.user);

        Order.belongsToMany(models.product,{
            through:models.orderitem
        })
    }
    return Order;
}