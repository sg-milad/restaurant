const router = require("express").Router();
const controller = require("../controller/product");
const { admin, authenticated } = require("../middlewares/auth");
router.post("/addproduct", admin, authenticated, controller.addproduct);
router.get("/all", controller.getallproduct);
router.get("/:id", authenticated, controller.getProductById);
router.delete("/:id", authenticated, admin, controller.deleteProduct);
module.exports = router;
