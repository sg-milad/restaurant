const router = require("express").Router();
const controller = require("../controller/order");
const { authenticated } = require("../middlewares/auth");
//  post  public /api/orders/
router.post("/addorder", authenticated, controller.addOrderItems);
// get    public /api/orders/
router.get("/myorder", authenticated, controller.getmyOrderItems);

module.exports = router;
