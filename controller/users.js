const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../model/users");
const passport = require("passport");
const { validationResult } = require("express-validator");
exports.register = async (req, res) => {
  try {
    const users = await Users.findOne({ username: req.body.username });
    if (users) {
      return res.status(400).json("user already exists");
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    res.status(201).json("create Success");
    console.log(user);
  } catch (err) {
    const error = new Error("error 500");
    error.statuscode = 500;
    throw error;
  }
};
exports.login = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/api/users/login",
  })(req, res, next);
};

exports.getlogin = (req, res) => {
  res.send("hi login");
};

exports.logout = (req, res, next) => {
  req.session = null;
  req.logout();
  res.redirect("/");
};
