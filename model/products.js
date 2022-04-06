const mongoose = require("mongoose");
const postschema = new mongoose.Schema({
  titel: { type: String },
  category: { type: String },
  description: { type: String },
  Price: { type: String },
  rate: { type: String },
  img: { type: String },
});

module.exports = mongoose.model("post", postschema);
