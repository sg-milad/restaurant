exports.notFound = (req, res, next) => {
  const error = new Error("Not Found ");
  res.status(404);
  next(error);
};
exports.errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
};
