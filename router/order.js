const router = require("express").Router();
const controller = require("../controller/order");
const { authenticated } = require("../middlewares/auth");
router.post("/addorder", authenticated, controller.addOrderItems);
router.get("/myorder", authenticated, controller.getmyOrderItems);

module.exports = router;
