const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const { handleError } = require("./middleware/error");
const verifyToken = require("./middleware/verify");

dotenv.config({ path: "./.env" });

const db = require("./db");
const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// const http = require("http").createServer(express);
// const io = require("socket.io")(http);

// io.on("connection", (socket) => {
//   socket.on("join", async () => {
//     return "hi join";
//   });
//   socket.on("message", (message) => {
//     return "hi message";
//   });
// });

app.use("/api", [verifyToken]);

app.use("/auth", authRouter);
app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
