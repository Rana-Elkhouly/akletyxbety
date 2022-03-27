const Order = require("../models/order.model");

exports.getAllOrders = async () => {
    const orders = await Order.find().populate('userId').populate('items.productId');
    return orders;
};

exports.getUserOrders = async (userLoggedId) => {
    const orders = await Order.find().populate('userId').populate('items.productId');
    const userOrder = orders.find(order => order.userId == userLoggedId)

    console.log(userOrder)
    return orders[0];
};
exports.createOrder = async payload => {
    const order = await Order.create(payload);
    return order
}