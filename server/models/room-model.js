const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema(
  {
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    type: { type: String, required: true },
    users: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", Room);
