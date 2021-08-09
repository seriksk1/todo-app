const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const Task = require("../models/task-model");
const TaskService = require("../services/tasks-service");

const dueDateChecker = require("./dueDateChecker");

const createTask = async (req, res, next) => {
  try {
    const body = req.body;

    if (!body) {
      throw new QueryError(
        HTTP_STATUS.BAD_REQUEST,
        "You must provide a body to create task"
      );
    }

    const task = await TaskService.createTask(body);

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
    const id = req.params.id;
    const body = req.body;

    if (!body) {
      throw new QueryError(
        HTTP_STATUS.BAD_REQUEST,
        "You must provide a body to update task"
      );
    }

    const updatedTask = await TaskService.updateStatus(id, body.status);

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
    await TaskService.deleteTask(req.params.id);

    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (err) {
    next(err);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const tasksList = await TaskService.getTasks({});
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
