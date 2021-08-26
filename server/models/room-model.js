const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema(
  {
    owner: { type: String },
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    isPrivate: { type: Boolean, default: false, required: true },
    users: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", Room);
