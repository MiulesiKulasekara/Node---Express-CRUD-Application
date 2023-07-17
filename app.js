const express = require("express");
const cors = require("cors");
require("dotenv").config();

//database connection
const connection = require("./dbconnection/dbconnection");

//routes
const studentRoute = require("./routes/studentRoute");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

//API
app.use("/api/students", studentRoute);

connection.once("open", () => {
  console.log("Database connection is succeed");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
