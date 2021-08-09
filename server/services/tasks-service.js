const Task = require("../models/task-model");
const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const createTask = async (body) => {
  try {
    const newTask = await new Task(body);
    await newTask.save();
    return newTask;
  } catch (err) {
    throw err;
  }
};

const updateStatus = async (id, status) => {
  try {
    return await Task.findOneAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );
  } catch (error) {
    throw new QueryError(HTTP_STATUS.NOT_FOUND);
  }
};

const deleteTask = async (id) => {
  try {
    await Task.findOneAndDelete({ _id: id });
  } catch (err) {
    throw new QueryError(HTTP_STATUS.NOT_FOUND, "Task not deleted!");
  }
};

const getTasks = async (query) => {
  try {
    return await Task.find(query);
  } catch (error) {
    throw new QueryError(HTTP_STATUS.NOT_FOUND, "Tasks not found!");
  }
};

module.exports = {
  updateStatus,
  deleteTask,
  getTasks,
  createTask,
};
