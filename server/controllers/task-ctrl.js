const Task = require("../models/task-model");

const createTask = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a task",
    });
  }

  const task = new Task(body);

  if (!task) {
    return res.status(400).json({ success: false, error: Error });
  }

  task
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: task._id,
        message: "Task created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Task not created!",
      });
    });
};

const updateTask = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Task.findOne({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Task not found!",
      });
    }
    task.name = body.name;
    task.time = body.time;
    task.rating = body.rating;
    task
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: task._id,
          message: "Task updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Task not updated!",
        });
      });
  });
};

const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!task) {
      return res.status(404).json({ success: false, error: `Task not found` });
    }

    return res.status(200).json({ success: true, data: task });
  }).catch((err) => console.log(err));
};

const getTasks = async (req, res) => {
  await Task.find({}, (err, tasks) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!tasks.length) {
      return res.status(404).json({ success: false, error: `Task not found` });
    }
    return res.status(200).json({ success: true, data: tasks });
  }).catch((err) => console.log(err));
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
};
