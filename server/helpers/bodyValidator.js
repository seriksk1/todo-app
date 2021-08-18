const { QueryError } = require("./errorHandler");
const { HTTP_STATUS } = require("../constants");

const bodyValidator = (obj, errMessage) => {
  const isBodyValid = Object.values(obj).every((item) => item);

  if (!isBodyValid) {
    throw new QueryError(HTTP_STATUS.BAD_REQUEST, errMessage);
  }
};

module.exports = bodyValidator;
