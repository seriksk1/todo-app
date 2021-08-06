const Task = require("../models/task-model");
const dueDateChecker = require("./dueDateChecker");
const { HTTP_STATUS } = require("../constants");
const { ErrorHandler } = require("../helpers/error");

const createTask = async (req, res, next) => {
  try {
    const body = req.body;

    if (!body) {
      throw new ErrorHandler(
        HTTP_STATUS.BAD_REQUEST,
        "You must provide a body to create task"
      );
    }

    const task = new Task(body);
    await task.save();

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
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const body = req.body;

    if (!body) {
      throw new ErrorHandler(
        HTTP_STATUS.BAD_REQUEST,
        "You must provide a body to update task"
      );
    }

    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { status: body.status },
      { new: true }
    );

    if (!updatedTask) {
      throw new ErrorHandler(HTTP_STATUS.NOT_FOUND, "Task not updated");
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      item: updatedTask,
      message: "Task updated!",
    });
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    try {
      await Task.findOneAndDelete({ _id: req.params.id });
    } catch (err) {
      throw new ErrorHandler(HTTP_STATUS.NOT_FOUND, "Task not deleted!");
    }

    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (err) {
    next(err);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const tasksList = await Task.find({});
    if (!tasksList.length) {
      throw new ErrorHandler(HTTP_STATUS.NOT_FOUND, "Tasks not found!");
    }

    const updatedTasksList = dueDateChecker.getCheckedItems(tasksList);

    res.status(HTTP_STATUS.OK).json({ success: true, data: updatedTasksList });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
};
