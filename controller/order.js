const Order = require("../model/order");

exports.addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    totalPrice,
    isPaid,
  } = req.body;
  if (orderItems.length == 0) {
    const error = new Error("no order items");
    error.statusCode = 400;
    throw error;
  } else {
    const order = await Order.create({
      user: req.user.id,
      orderItems,
      shippingAddress,
      paymentMethod,
      shippingPrice,
      isPaid,
      totalPrice,
    });
    res.status(201).json(order);
    console.log(order);
  }
};
exports.getmyOrderItems = async (req, res) => {
  const order = await Order.find({ user: req.user._id });
  const username = req.user.username;
  if (order.length == 0) {
    const error = new Error("you dont have order");
    error.statusCode = 400;
    throw error;
  } else {
    res.json(order, username);
  }
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.json(order);
  } else {
    const error = new Error("not fond");
    error.statusCode = 404;
    throw error;
  }
};
