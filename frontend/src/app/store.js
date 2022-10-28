import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";
import modalReducer from "../features/taskModal/taskModal";

export const store = configureStore({
    reducer: {
        task: taskReducer,
        modal: modalReducer,
    },
});
