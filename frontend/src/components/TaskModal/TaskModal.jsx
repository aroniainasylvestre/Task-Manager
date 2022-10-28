import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../features/task/taskSlice";
import { closeModal } from "../../features/taskModal/taskModal";
import "./task-modal.css";

const TaskModal = () => {
    const { modal } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const [task, setTask] = useState({
        name: "",
        completed: false,
    });

    const onChange = (e) => {
        setTask({
            ...task,
            name: e.target.value,
        });
    };

    const onCheck = (e) => {
        setTask({
            ...task,
            completed: e.target.checked,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (task.name) {
            dispatch(addTask(task));
            dispatch(closeModal());
        }
    };

    return (
        <>
            {modal && (
                <div
                    className="main-wrapper"
                    onClick={() => dispatch(closeModal())}
                >
                    <div className="task-modal">
                        <h4 className="heading">Add task</h4>
                        <form className="task-form" onSubmit={onSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={task.name}
                                    placeholder="Add new task ..."
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="completed">Completed</label>
                                <input
                                    type="checkbox"
                                    id="completed"
                                    name="completed"
                                    onChange={onCheck}
                                />
                            </div>
                            <button type="submit" className="button">
                                <AiFillPlusCircle className="icon" />
                                Add task
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskModal;
