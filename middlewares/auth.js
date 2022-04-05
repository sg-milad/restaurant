exports.authenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/api/users/login");
};
// exports.Notauthenticated = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     res.redirect("/api/users/login");
//   }
//   return next();
// };
