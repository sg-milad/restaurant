const router = require("express").Router();
const cotroller = require("../controller/users");
const { body, validationResult } = require("express-validator");

router.get("/", cotroller.home);
router.post(
  "/register",
  body("email").isEmail(),
  body("username").isLength({ min: 4 }),
  body("password").isLength({ min: 4 }),
  cotroller.register
);
router.post("/login", cotroller.login);

module.exports = router;
