const Order = require("../models/OrderModel");

const getOrders = async (req, res, next) => {
  try {
    const order = await Order.find({});
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrders,
};
