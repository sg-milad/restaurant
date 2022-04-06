const router = require("express").Router();
const controller = require("../controller/home");
router.get("/", controller.home);
module.exports = router;
