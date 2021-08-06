const Task = require("../models/task-model");
const dueDateChecker = require("./dueDateChecker");
const { HTTP_STATUS } = require("../constants");

const createTask = (req, res) => {
  try {
    const body = req.body;

    if (!body) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        error: "You must provide a task",
      });
    }

    const task = new Task(body);

    task.save().then(() => {
      res.status(HTTP_STATUS.CREATED).json({
        success: true,
        item: {
          _id: task._id,
          task: task.task,
          dueDate: task.dueDate,
          status: dueDateChecker.getUpdatedStatus(task),
        },
        message: "Task created!",
      });
    });
  } catch (err) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      err,
      message: "Task not created!",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const body = req.body;

    if (!body) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        error: "You must provide a body to update",
      });
    }

    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { status: body.status },
      { new: true }
    );

    res.status(HTTP_STATUS.OK).json({
      success: true,
      item: updatedTask,
      message: "Task updated!",
    });
  } catch (err) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      error: err,
      message: "Task not found!",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.id });

    res.status(OK).json({ success: true });
  } catch (err) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, error: err });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasksList = await Task.find({});
    if (!tasksList.length) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ success: false, error: `Tasks not found` });
    }

    const updatedTasksList = dueDateChecker.getCheckedItems(tasksList);

    res.status(HTTP_STATUS.OK).json({ success: true, data: updatedTasksList });
  } catch (err) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, error: err });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
};
