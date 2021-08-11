const { HTTP_STATUS } = require("../constants");

class QueryError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = {
  QueryError,
};
