const jwt = require("jsonwebtoken");
const { HTTP_STATUS } = require("../constants");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const TOKEN_KEY = process.env.TOKEN_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(HTTP_STATUS.FORBIDDEN)
      .send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    res.status(HTTP_STATUS.OK).json({
      success: true,
      token: decoded,
      message: "Verified!",
    });
  } catch (err) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: "Not verified!",
    });
  }
};

module.exports = verifyToken;
