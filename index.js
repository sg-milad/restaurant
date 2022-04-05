const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const session = require("express-session");
const passport = require("passport");
const confegepassport = require("./config/passport");
const { notFound, errorHandler } = require("./middlewares/errorhandeling");
const path = require("path");

//* databas
const mongoose = require("./config/database");
//* json parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());
//* session
app.use(
  session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: true,
  })
);
//* static
app.use(express.static(path.join(__dirname, "uploads")));
//* init password
app.use(passport.initialize());
app.use(passport.session());
//* routs
const users = require("./router/users");
const home = require("./router/home");
const order = require("./router/order");
app.use("/home", home);
app.use("/api/users", users);
app.use("/api/orders", order);
//*middlewares
app.use(notFound);
app.use(errorHandler);
//
app.listen(process.env.PORT, () =>
  console.log(`server runing on port ${process.env.PORT}`)
);
