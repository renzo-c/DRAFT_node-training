const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

require("dotenv").config();

const connectionString = process.env.DB_URL;
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
