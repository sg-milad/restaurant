const mongoose = require("mongoose");
const postschema = new mongoose.Schema({});

module.exports = mongoose.model("post", postschema);
