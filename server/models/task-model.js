const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    task: { type: String, required: true },
    dueDate: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasks", Task);
