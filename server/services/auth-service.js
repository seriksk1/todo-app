const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user-model");
const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const createUser = async (email, password) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      email: email,
      password: encryptedPassword,
    });

    const token = await jwt.sign(
      { user_id: newUser._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    newUser.token = token;

    await newUser.save();

    return newUser;
  } catch (err) {
    throw new QueryError(HTTP_STATUS.BAD_REQUEST, "User is not created!");
  }
};

const getUserToken = async (email, password, user) => {
  try {
    if (bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      return token;
    } else {
      throw new QueryError(HTTP_STATUS.BAD_REQUEST, "Wrong password!");
    }
  } catch (err) {
    console.log(err);
    throw new QueryError(HTTP_STATUS.BAD_REQUEST, "Something is wrong...");
  }
};

module.exports = { createUser, getUserToken };
