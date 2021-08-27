const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema(
  {
    owner: { type: String },
    name: { type: String, required: true },
    isPrivate: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", Room);
