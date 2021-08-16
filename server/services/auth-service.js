const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user-model");
const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const createUser = async (email, password, username) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      email,
      password: encryptedPassword,
      username,
    });

    const token = await jwt.sign(
      { user_id: newUser._id, username },
      process.env.TOKEN_KEY,
      { expiresIn: "10m" }
    );

    newUser.token = token;

    await newUser.save();

    return newUser;
  } catch (err) {
    throw new QueryError(HTTP_STATUS.BAD_REQUEST, "User is not created!");
  }
};

const getUserToken = async (username, password, user) => {
  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        { expiresIn: "10m" }
      );
      return token;
    } else {
      throw new QueryError(
        HTTP_STATUS.BAD_REQUEST,
        "Wrong password or username"
      );
    }
  } catch (err) {
    throw err;
  }
};

module.exports = { createUser, getUserToken };
