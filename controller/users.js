const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../model/users");
const passport = require("passport");
const { validationResult } = require("express-validator");
exports.home = (req, res) => {
  res.send("hi");
};
exports.register = async (req, res) => {
  try {
    const users = await Users.findOne({ username: req.body.username });
    if (users) {
      return res.json("user exist");
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
    }).then(res.status(201).json("create Success"));
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};
exports.login = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })(req, res, next);
};
exports.getlogin = (req, res) => {
  res.send("hi login");
};

exports.logout = (req, res, next) => {
  req.session.user = null;
  return res.json("logout");
};
