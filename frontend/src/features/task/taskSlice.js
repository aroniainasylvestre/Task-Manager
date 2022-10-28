import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./taskService";

const initialState = {
    tasks: [],
    isLoading: false,
};

// Add task
export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (task, thunkAPI) => {
        try {
            const response = await taskService.addTask(task);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get all tasks
export const getTasks = createAsyncThunk(
    "tasks/getTasks",
    async (_, thunkAPI) => {
        try {
            const response = await taskService.getTasks();
            return response.tasks;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get task
export const getTask = createAsyncThunk(
    "tasks/getTask",
    async (id, thunkAPI) => {
        try {
            const response = await taskService.getTask(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Update task
export const editTask = createAsyncThunk(
    "tasks/editTask",
    async (data, thunkAPI) => {
        try {
            const { id, task } = data;
            const response = await taskService.updateTask(id, task);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Remove task
export const removeTask = createAsyncThunk(
    "tasks/removeTask",
    async (id, thunkAPI) => {
        try {
            const response = await taskService.removeTask(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks.push(action.payload);
            })
            .addCase(addTask.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload;
            })
            .addCase(getTasks.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.skill = action.payload;
            })
            .addCase(getTask.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(editTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.tasks.findIndex(
                    (skill) => skill.id === action.payload.id
                );
                state.tasks[index] = {
                    ...state[index],
                    ...action.payload,
                };
            })
            .addCase(editTask.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(removeTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                state.isLoading = false;
                let index = state.tasks.findIndex(
                    ({ id }) => id === action.payload.id
                );
                state.tasks.splice(index, 1);
            })
            .addCase(removeTask.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default taskSlice.reducer;
