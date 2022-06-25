const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

require("dotenv").config();
const notFound = require("./middleware/not-found");

const connectionString = process.env.DB_URL;
const connectDB = require("./db/connect");

// middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

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
