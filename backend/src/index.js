const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/database.config");
const { errorHandler } = require("./middlewares/error-handler.middleware");
const taskRoutes = require("./routes/task.routes");
require("dotenv").config();

// Create express app
const app = express();

// Connect to the database
const URL = process.env.MONGO_URI;
connectDB(URL);

// cors
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// morgan
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// routes
app.use("/task_manager/api/v1/tasks", taskRoutes);

// ErrorHandler
app.use(errorHandler);

// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
