import React from "react";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeTask } from "../../features/task/taskSlice";
import "./task-item.css";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const deleteTask = (id) => {
        dispatch(removeTask(id));
    };

    return (
        <li className="task-item">
            <div className={task.completed ? "completed" : "pending"}>
                <AiFillCheckCircle className="icon" />
            </div>
            <div className="name">{task.name}</div>
            <div className="user-actions-btn">
                <button className="edit-btn">
                    <AiFillEdit className="icon" />
                </button>
                <button
                    className="delete-btn"
                    onClick={() => deleteTask(task._id)}
                >
                    <AiFillDelete className="icon" />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
