import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ClearIcon from "@mui/icons-material/Clear";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTask } from "../../features/task/taskSlice";
import "./task-item.css";

const TaskItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <li className="task-item card d-flex flex-row align-items-center rounded-1 p-1">
            <TaskAltIcon
                className={
                    item.completed ? "text-success visible" : "invisible"
                }
            />
            <span
                className={
                    item.completed
                        ? "fw-bold block flex-grow-1 ps-3 text-decoration-line-through opacity-50"
                        : "fw-bold block flex-grow-1 ps-3"
                }
            >
                {item.name}
            </span>
            <div className="d-flex gap-1">
                <button
                    type="button"
                    className="flex-fill btn btn-outline-primary border-0 rounded-1"
                    onClick={() => navigate(`/edit/${item._id}`)}
                >
                    <ModeEditIcon />
                </button>
                <button
                    type="button"
                    className="flex-fill btn btn-outline-danger border-0 rounded-1"
                    onClick={() => dispatch(removeTask(item._id))}
                >
                    <ClearIcon />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
