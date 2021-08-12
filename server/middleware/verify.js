const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { HTTP_STATUS } = require("../constants");
const TOKEN_KEY = process.env.TOKEN_KEY;

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(HTTP_STATUS.FORBIDDEN)
      .send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded.user_id;
    console.log("Token is OK");

    next();
  } catch (err) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: "Session timed out, please login again",
    });
  }
};

module.exports = verifyToken;
