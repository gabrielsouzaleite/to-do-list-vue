const express = require('express')
const router = express.Router();

const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

router.get('/tasks', tasksController.getAll)
router.get('/tasks/:id', tasksController.getById);
router.post('/tasks', tasksMiddleware.validateFieldBody, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validateFieldBody, tasksMiddleware.validateFieldStatus, tasksController.updateTask)
router.patch('/tasks/:id/complete', tasksController.toggleCompleteTask);

module.exports = router