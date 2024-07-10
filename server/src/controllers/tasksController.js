const { Task } = require('../../models');

const getAll = async (_req, res) => {
  const tasks = await Task.findAll();
  return res.status(200).json(tasks);
};

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

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
