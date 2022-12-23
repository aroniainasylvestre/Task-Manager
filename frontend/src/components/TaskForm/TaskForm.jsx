import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";
import "./TaskForm.css";

const TaskForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (task !== "") {
            console.log("add");
            dispatch(addTask({ name: task }));
            setTask("");
        }
    };

    return (
        <form className="w-50 pt-5" onSubmit={onSubmit}>
            <div className="task-input w-100 d-flex gap-2">
                <input
                    className="form-control form-control-sm"
                    placeholder="New task"
                    type="text"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-outline-primary" type="submit">
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
