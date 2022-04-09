const router = require("express").Router();
const controller = require("../controller/product");
const { admin, authenticated } = require("../middlewares/auth");

// post   Private     /api/product/  add new product
router.post("/addproduct", admin, authenticated, controller.addproduct);
// get   public       /api/product/
router.get("/all", controller.getallproduct);
// get    public       /api/product/
router.get("/:id", authenticated, controller.getProductById);
// delete   private   /api/product/
router.delete("/:id", authenticated, admin, controller.deleteProduct);

module.exports = router;
