const router = require("express").Router();
const cotroller = require("../controller/users");
const { body, validationResult } = require("express-validator");
const { authenticated } = require("../middlewares/auth");
router.post(
  "/register",
  body("email").isEmail(),
  body("username").isLength({ min: 4 }),
  body("password").isLength({ min: 4 }),
  cotroller.register
);
router.post("/login", cotroller.login);
router.get("/login", cotroller.getlogin);

module.exports = router;
