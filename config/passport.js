const passport = require("passport");
const localstrategy = require("passport-local").Strategy;
const User = require("../model/users");
const bcrypt = require("bcryptjs");
passport.use(
  new localstrategy(async function (username, password, done) {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        console.log("sss");
        return done(null, false, {
          message: "user not exist",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return done(null, user, { message: "ok" }); //req.user
      } else {
        return done(null, false, {
          message: "username or password wrong",
        });
      }
    } catch (err) {
      const error = new Error("500");
      error.satuscode = 500;
      console.log(err);
    }
  })
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
