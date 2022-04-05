const Order = require("../model/order");

exports.addOrderItems = async (req, res, next) => {
  const { orderItems } = req.body;
  if (orderItems.length == 0) {
    const error = new Error("no order items");
    error.statusCode = 400;
    next(error);
  } else {
    const order = await Order.create({
      user: req.user.id,
      orderItems,
    });
    res.status(201).json(order);
    console.log(order);
  }
};
exports.getmyOrderItems = async (req, res, next) => {
  const order = await Order.find({ user: req.user._id });
  const { username } = req.user;
  if (order.length == 0) {
    const error = new Error("you dont have order");
    error.statusCode = 400;
    next(error);
  } else {
    res.status(200).json(order);
    console.log(order);
    console.log(username);
  }
};

exports.getOrderById = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.json(order);
  } else {
    const error = new Error("not fond");
    error.statusCode = 404;
    next(error);
  }
};
