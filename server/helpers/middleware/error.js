const { HTTP_STATUS } = require("../../constants");

const handleError = (err, res) => {
  const { statusCode, message } = err;
  console.log(message);
  res.status(statusCode).json({
    err: err,
    statusCode: statusCode,
    message: message,
  });
};

module.exports = {
  handleError,
};
