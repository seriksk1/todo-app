const Task = require('../models/task-model');
const Checker = require('./status');

const createTask = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a task',
    });
  }

  const task = await new Task({
    ...body,
    status: Checker.getOverdueStatus(body),
  });

  if (!task) {
    return res.status(400).json({ success: false });
  }

  await task
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        item: {
          _id: task._id,
          task: task.task,
          status: task.status,
          dueDate: task.dueDate,
        },
        message: 'Task created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Task not created!',
      });
    });
};

const updateTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });

  const newStatus = Checker.getUpdatedStatus(task);

  await Task.findByIdAndUpdate(req.params.id, { status: newStatus }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, status: newStatus });
  }).catch((err) => console.log(err));
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true });
  }).catch((err) => console.log(err));
};

const getTasks = async (req, res) => {
  try {
    await Task.find({}, (err, tasks) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!tasks.length) {
        return res.status(404).json({ success: false, error: `Tasks not found` });
      }

      Checker.checkAllOnOverdue(tasks);
      return res.status(200).json({ success: true, data: tasks });
    }).catch((err) => console.log(err));
  } catch (error) {}
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
};
