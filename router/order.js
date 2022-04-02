const router = require("express").Router();
const controller = require("../controller/order");
const { authenticated } = require("../middlewares/auth");
router.post("/order", authenticated, controller.addOrderItems);
router.get("/myorder", authenticated, controller.getmyOrderItems);
router.get("/:id", controller.getOrderById);

module.exports = router;
