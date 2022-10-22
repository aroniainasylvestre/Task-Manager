const express = require("express");
const router = express.Router();

const {
    getAllTasks,
    addTask,
    getTask,
    updateTask,
    removeTask,
} = require("../controllers/task.controllers");

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.post("/add", addTask);
router.put("/:id", updateTask);
router.delete("/:id", removeTask);

module.exports = router;
