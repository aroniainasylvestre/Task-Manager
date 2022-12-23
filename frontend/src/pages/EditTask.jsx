import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editTask, getTask } from "../features/task/taskSlice";

const EditTask = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { task, isLoading } = useSelector((state) => state.task);

    const [data, setData] = useState({
        name: task.name,
        completed: task.completed,
    });

    console.log("onload :", data);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit:", data);
        dispatch(editTask({ id, data }));
        navigate("/");
    };

    useEffect(() => {
        if (id) {
            dispatch(getTask(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div className="container-sm d-flex flex-column align-items-center justify-content-center pt-5">
            <h3 className="fs-5">Edit Task</h3>
            <form
                className="w-50 pt-5 d-flex flex-column gap-5 card p-4 shadow-sm"
                onSubmit={onSubmit}
            >
                <div className="w-100 d-flex flex-column gap-2">
                    <input
                        className="form-control form-control-sm"
                        type="text"
                        id="task"
                        name="task"
                        value={data.name ? data.name : ""}
                        onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                        }
                    />
                    <div className="d-flex gap-4">
                        <label htmlFor="completed">Completed </label>
                        <input
                            type="checkbox"
                            id="completed"
                            name="completed"
                            checked={data.completed ? data.completed : false}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    completed: e.target.checked,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="d-flex flex-row gap-2 justify-content-end">
                    <button type="submit" className="btn btn-success">
                        Save
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTask;
