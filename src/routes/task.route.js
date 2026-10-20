const express = require('express');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.post("/createTask", taskController.createTask);
router.get("/allTasks", taskController.getAllTasks);

module.exports = router;