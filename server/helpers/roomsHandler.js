const ChatService = require("../services/chat-service");
const bodyValidator = require("./bodyValidator");
const { SOCKET_EVENT } = require("../constants");

module.exports = (io, socket) => {
  const createRoom = (room) => {
    io.emit(SOCKET_EVENT.SERVER.CREATE_ROOM, room);
  };

  const joinRoom = (user, room) => {
    io.emit(SOCKET_EVENT.SERVER.JOIN_ROOM, user, room);
  };

  const leaveRoom = (user, room) => {
    io.emit(SOCKET_EVENT.SERVER.LEAVE_ROOM, user, room);
  };

  const userJoin = () => {};

  const userLeave = () => {};

  const userCreateRoom = () => {};

  socket.on(SOCKET_EVENT.CLIENT.LEAVE_ROOM, userLeave);
  socket.on(SOCKET_EVENT.CLIENT.JOIN_ROOM, userJoin);
  socket.on(SOCKET_EVENT.CLIENT.CREATE_ROOM, userCreateRoom);
};
