const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { handleError } = require("./helpers/middleware");

dotenv.config({ path: "./.env" });

require("./db");
const taskRouter = require("./routes/task-router");

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
