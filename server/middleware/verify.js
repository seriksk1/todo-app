const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { HTTP_STATUS } = require("../constants");
const TOKEN_KEY = process.env.TOKEN_KEY;

const getDecodedToken = (token) => {
  try {
    return jwt.verify(token, TOKEN_KEY);
  } catch (err) {
    throw new Error("Token isn't verified!");
  }
};

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(HTTP_STATUS.FORBIDDEN)
      .send("A token is required for authentication");
  }
  try {
    const decoded = getDecodedToken(token);
    req.user = decoded.user_id;

    next();
  } catch (err) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: "Your session has timed out. Please login again.",
    });
  }
};

module.exports = { verifyToken, getDecodedToken };
