// const bcrypt = require("bcryptjs");
const Users = require("../model/users");
const passport = require("passport");
const { validationResult } = require("express-validator");
exports.register = async (req, res, next) => {
  try {
    const users = await Users.findOne({ username: req.body.username });
    if (users) {
      return res.status(400).json("user already exists");
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json("create Success");
    console.log(user);
  } catch (err) {
    console.log(err);
    const error = new Error(500);
    error.statuscode = 500;
    next(error);
  }
};
exports.login = async (req, res, next) => {
  passport.authenticate("local")(req, res, next);
};

exports.getlogin = (req, res) => {
  res.send("hi login");
};

exports.logout = (req, res, next) => {
  req.session = null;
  req.logout();
};
