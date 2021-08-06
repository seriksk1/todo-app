const handleError = (err, res) => {
  const { statusCode, message } = err;
  console.log(err.message);
  res.status(statusCode).json({
    err: err,
    statusCode,
    message,
  });
};

module.exports = {
  handleError,
};
