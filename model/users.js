const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 4,
      maxlength: 200,
      required: true,
      unique: true,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: { createdAt: "creat_at" } }
);
userschema.pre("save", function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("users", userschema);
