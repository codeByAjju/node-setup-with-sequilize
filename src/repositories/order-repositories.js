import models from "../models";
const { order, orderitems } = models;

export default {
  async saveOrder(request) {
    console.log(request.body)
    // try {
    //   const { contactPerson, contactNumber, deliveryAddress, date, billAmount, items, userId } = request.body;

    //   const newOrder = await order.create({
    //     contactPerson,
    //     contactNumber,
    //     deliveryAddress,
    //     billAmount,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     userId,
    //   });

    //   const orderitems = items.map((item) => ({
    //     productId: item.productId,
    //     orderId: newOrder.id,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }));

    //   await orderitems.bulkCreate(orderitems);
    //   return newOrder;
    // } catch (error) {
    //   throw error;
    // }
  },
};
