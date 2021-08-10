const jwt = require("jsonwebtoken");
const { HTTP_STATUS } = require("../../constants");

const TOKEN_KEY = process.env.TOKEN_KEY;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res
      .status(HTTP_STATUS.FORBIDDEN)
      .send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
