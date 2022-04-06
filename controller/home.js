const product = require("../model/products");
exports.home = async (req, res) => {
  const allpost = await product.find({});
  res.json(allpost);
};
