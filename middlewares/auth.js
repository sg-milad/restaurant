exports.authenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};
exports.Notauthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect("/login");
  }
  return next();
};
