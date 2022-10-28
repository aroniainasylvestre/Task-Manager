import React, { useEffect } from "react";
import TaskItem from "./components/TaskItem/TaskItem";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "./features/task/taskSlice";
import TaskModal from "./components/TaskModal/TaskModal";
import { openModal } from "./features/taskModal/taskModal";

const App = () => {
    const { tasks } = useSelector((state) => state.task);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    return (
        <div className="app">
            <TaskModal />
            <div className="task">
                <h4 className="heading">Task Manager</h4>
                <div className="container">
                    <button
                        className="button"
                        onClick={() => dispatch(openModal())}
                    >
                        <BsPlusCircleFill className="plus-icon" /> Add new task
                    </button>
                    <ul className="task-container">
                        {tasks?.map((task) => {
                            return <TaskItem key={task._id} task={task} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
