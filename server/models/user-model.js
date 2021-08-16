const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    username: { type: String, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
