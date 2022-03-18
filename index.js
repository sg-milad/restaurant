const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
//*
app.use(
  session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: true,
  })
);
//*
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//* routs
const routs = require("./router/users");
app.use(routs);
//* databas
const mongoose = require("./config/database");
app.listen(process.env.PORT, () => console.log("server is runing"));
