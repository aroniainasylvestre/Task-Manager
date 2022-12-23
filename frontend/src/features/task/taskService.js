import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/task_manager/api/v1/tasks",
    headers: {
        "Content-Type": "application/json",
    },
});

const addTask = async (task) => {
    const response = await API.post("/add", task);
    return response.data;
};

const getTasks = async () => {
    const response = await API.get("/");
    return response.data;
};

const getTask = async (id) => {
    const response = await API.get("/" + id);
    return response.data.task;
};

const updateTask = async (id, task) => {
    const response = await API.put(`/${id}`, task);
    return response.data;
};

const removeTask = async (id) => {
    const response = await API.delete("/" + id);
    return response.data;
};

const taskService = {
    addTask,
    removeTask,
    getTask,
    getTasks,
    updateTask,
};

export default taskService;
