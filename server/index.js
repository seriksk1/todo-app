const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./db");

const ChatCtrl = require("./controllers/chat-ctrl");
const verifyToken = require("./middleware/verify");
const { handleError } = require("./middleware/error");

const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    allowedHeaders: ["Access-Control-Allow-Origin"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", async (message) => {
    const newMessage = await ChatCtrl.createMessage(message);
    io.emit("get_message", newMessage);
  });

  socket.on("find_messages", async () => {
    const items = await ChatCtrl.getMessages();
    io.emit("get_messages", items);
  });
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", [verifyToken]);

app.use("/auth", authRouter);
app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

httpServer.listen(API_PORT, () =>
  console.log(`Server running on port ${API_PORT}`)
);
