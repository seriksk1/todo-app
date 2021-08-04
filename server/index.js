const express = require("express");
const cors = require("cors");

const db = require("./DB");
const taskRouter = require("./routes/task-router");

const app = express();
const API_PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", taskRouter);

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
