const router = require("express").Router();
const { authenticated } = require("../middlewares/auth");
const controller = require("../controller/home");
router.get("/", authenticated, controller.home);
module.exports = router;
