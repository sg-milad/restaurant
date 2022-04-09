const appRoot = require("app-root-path");
const Product = require("../model/products");
exports.addproduct = (req, res) => {
  const foodimg = req.files.img;
  const filename = `${foodimg.name}`;
  const filepath = `${appRoot}/uploads/${filename}`;
  foodimg.mv(filepath, function (err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
  });
  Product.create({
    ...req.body,
    img: filename,
  });
};
exports.getProductById = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  console.log(req.params);
  if (product) {
    res.json(product);
  } else {
    const error = new Error("not fond");
    error.statusCode = 404;
    next(error);
  }
};
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (product) {
    res.json({ message: "Product removed" });
  } else {
    const error = new Error("Product not found");
    error.statusCode = 404;
    next(error);
  }
};
exports.getallproduct = async (req, res) => {
  const allpost = await Product.find({});
  res.json(allpost);
};
