const post = require("../model/posts");
const mongoose = require("mongoose");
exports.home = async (req, res) => {
  const allpost = await post.find({});
  console.log(allpost);
  res.json(allpost);
};
