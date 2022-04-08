exports.authenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json("you dont have Authenticat");
};

exports.admin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
