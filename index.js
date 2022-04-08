const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
const rateLimit = require("express-rate-limit");
const passport = require("passport");
const confegepassport = require("./config/passport");
const { notFound, errorHandler } = require("./middlewares/errorhandeling");
const path = require("path");

//* databas
const mongoose = require("./config/database");
//* body parser
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
//* limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
//* static
app.use(express.static(path.join(__dirname, "uploads")));
//* init password
app.use(passport.initialize());
app.use(passport.session());
//*middlewares
app.use(helmet());
app.use(limiter);
app.use(morgan("dev"));
const product = require("./router/product");
const users = require("./router/users");
const home = require("./router/home");
const order = require("./router/order");
app.use(home);
app.use("/api/users", users);
app.use("/api/orders", order);
app.use("/api/product", product);
app.use(notFound);
app.use(errorHandler);
//
app.listen(process.env.PORT, () =>
  console.log(`server runing on port ${process.env.PORT}`)
);
