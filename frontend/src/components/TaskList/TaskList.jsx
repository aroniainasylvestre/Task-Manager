import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../features/task/taskSlice";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, isLoading } = useSelector((state) => state.task);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <ul className="w-50 mt-4 list-group gap-1">
            {tasks.length > 0 ? (
                tasks.map((item) => {
                    return <TaskItem key={item._id} item={item} />;
                })
            ) : (
                <div className="alert alert-danger" role="alert">
                    No Task
                </div>
            )}
        </ul>
    );
};

export default TaskList;
