const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const session = require("express-session");
const passport = require("passport");
const confegepassport = require("./config/passport");
const path = require("path");

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
//* init password
app.use(passport.initialize());
app.use(passport.session());
//* routs
const users = require("./router/users");
const home = require("./router/home");
app.use(express.static(path.join(__dirname, "uploads")));

app.use(users);
app.use(home);
//* databas
const mongoose = require("./config/database");
app.listen(process.env.PORT, () => console.log("server is runing"));
