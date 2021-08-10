const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");
const AuthService = require("../services/auth-service");

const User = require("../models/user-model");

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      throw new QueryError("Registration error, body is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      throw new QueryError(HTTP_STATUS.CONFLICT, "User already exist!");
    }

    const newUser = await AuthService.createUser(email, password);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      token: newUser.token,
      message: "User created!",
    });
  } catch (err) {
    next(err);
  }
};
const getUserToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    if (!(email && password)) {
      throw new QueryError(
        HTTP_STATUS.BAD_REQUEST,
        "Login error, body is required"
      );
    }

    const user = await User.findOne({ email });

    console.log(user);
    if (user) {
      user.token = await AuthService.getUserToken(email, password, user);
    } else {
      throw new QueryError(
        HTTP_STATUS.NOT_FOUND,
        "Login error, you are not registered yet!"
      );
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      token: user.token,
      message: "User logged in!",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUserToken,
};
