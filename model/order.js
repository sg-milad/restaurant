const mongoose = require("mongoose");

const orderschema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  orderItems: [
    {
      title: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "post",
      },
    },
  ],
});

module.exports = mongoose.model("Order", orderschema);
