const router = require("express").Router();
const cotroller = require("../controller/users");
const { body } = require("express-validator");
const { Notauthenticated } = require("../middlewares/auth");
router.post(
  "/register",
  body("email").isEmail(),
  body("username").isLength({ min: 4 }),
  body("password").isLength({ min: 4 }),
  cotroller.register
);
router.post("/login", Notauthenticated, cotroller.login);
router.get("/logout", cotroller.logout);
// router.get("/login", Notauthenticated, cotroller.getlogin);

module.exports = router;
