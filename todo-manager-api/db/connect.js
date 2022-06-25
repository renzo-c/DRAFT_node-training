const mongoose = require("mongoose");

const connectionString = process.env.DB_URL;

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the db..."))
  .catch((err) => console.log(err));
