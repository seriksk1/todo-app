const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { handleError } = require("./helpers/middleware/error");
const verifyToken = require("./helpers/middleware/verify");

dotenv.config({ path: "./.env" });

require("./db");
const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");

const userBoard = (req, res) => {
  res.status(HTTP_STATUS.OK).send("AUTHORIZED");
};

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);

app.use("/api", taskRouter);

app.get("/auth/user", [verifyToken], userBoard);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
