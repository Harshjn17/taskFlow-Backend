const taskModel = require('../models/task.model');

async function createTask(req, res) {
    const { title, description, status, priority, dueDate } = req.body;

    // Validate title
    if(!title || !title.trim()){
        return res.status(400).json({
            message: "Invalid Title"
        })
    }

    // Creating task
    const task = await taskModel.create({
        title,
        description,
        status,
        priority,
        dueDate
    });

    res.status(200).json({
        message: "Task Created successfully",
            task
    })
};

async function getAllTasks(req, res) {
    try {
        const tasks = await taskModel.find();
    res.status(200).json({
        message: "All Tasks fetched successfully",
        tasks
    })
    } catch (error) {
        console.log("Get All Tasks error:", error);
        return res.status(500).json({
            error: error
        }); 
    }
};

module.exports = {
    createTask,
    getAllTasks,
}