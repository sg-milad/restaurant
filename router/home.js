const router = require("express").Router();
const controller = require("../controller/home");
const controllerupload = require("../controller/upload");
router.get("/", controller.home);
// router.post("/upload", controllerupload.upload);
module.exports = router;
