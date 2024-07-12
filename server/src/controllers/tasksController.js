const { Task } = require('../../models');

const getAll = async (_req, res) => {
  const tasks = await Task.findAll();
  return res.status(200).json(tasks);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(task);
}

const createTask = async (req, res) => {
  const createdTask = await Task.create(req.body);
  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  await Task.update(req.body, { where: { id } });
  return res.status(204).json();
};

const toggleCompleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  await Task.update({ completed: !task.completed }, { where: { id } });
  return res.status(204).json();
}

module.exports = {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
  toggleCompleteTask
};
