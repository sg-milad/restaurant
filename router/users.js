const router = require("express").Router();
const cotroller = require("../controller/users");
const { body } = require("express-validator");
// post public api/users/    register new user
router.post(
  "/register",
  body("email").isEmail(),
  body("username").isLength({ min: 4 }),
  body("password").isLength({ min: 4 }),
  cotroller.register
);

// post public api/users/      Auth user
router.post("/login", cotroller.login);
// post public api/users/      logout user
router.post("/logout", cotroller.logout);
module.exports = router;
