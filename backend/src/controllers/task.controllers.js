const Task = require("../models/task.model");
const asyncHandler = require("express-async-handler");

/**
 * @Description :      Get all tasks
 */
const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    if (!tasks) throw new Error("Tasks not founds.");
    res.status(200).json({ tasks });
});

/**
 * @Description :      Get single task
 */
const getTask = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    if (!task) {
        throw new Error(`No task with id : ${id}`);
    }

    res.status(200).json({ task });
});

/**
 * @Description :      Create/Add new task
 */
const addTask = asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

/**
 * @Description :      Edit/Update task
 */
const updateTask = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    console.log(req.body);
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
    });
    if (!task) {
        throw new Error(`No task with id : ${id}`);
    }

    res.status(200).json({ task });
});

/**
 * @Description :      Remove task
 */
const removeTask = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
        throw new Error(`No task with id : ${id}`);
    }
    res.status(200).json({ message: "Task removed successfully." });
});

module.exports = {
    getAllTasks,
    addTask,
    getTask,
    updateTask,
    removeTask,
};
