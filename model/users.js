const mongoose = require("mongoose");
var dateObj = new Date();
var month = dateObj.getUTCMonth();
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
const newdate = year + "/" + month + "/" + day;
const userschema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 200,
    required: true,
    unique: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAT: { type: String, default: newdate },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("users", userschema);
