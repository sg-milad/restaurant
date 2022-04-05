const router = require("express").Router();
const cotroller = require("../controller/users");
const { body } = require("express-validator");
router.post(
  "/register",
  body("email").isEmail(),
  body("username").isLength({ min: 4 }),
  body("password").isLength({ min: 4 }),
  cotroller.register
);
router.post("/login", cotroller.login);
router.get("/login", cotroller.getlogin);

router.post("/logout", cotroller.logout);
module.exports = router;
