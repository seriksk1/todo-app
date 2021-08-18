const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = new Schema(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("messages", Message);
