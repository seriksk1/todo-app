const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = new Schema(
  {
    roomId: { type: Schema.Types.ObjectId },
    text: { type: String, required: true },
    username: { type: String, required: true },
    type: { type: String, required: true },
    isReply: { type: Boolean, default: false },
    repliedMessage: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("messages", Message);
