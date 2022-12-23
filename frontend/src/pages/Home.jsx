import React from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";

const Home = () => {
    return (
        <div className="container-sm d-flex flex-column align-items-center justify-content-center">
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default Home;
