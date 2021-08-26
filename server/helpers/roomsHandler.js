const ChatService = require("../services/chat-service");
const bodyValidator = require("./bodyValidator");
const { SOCKET_EVENT } = require("../constants");

module.exports = (io, socket) => {
  const userJoin = (roomId) => {
    socket.join(roomId);
  };

  const userLeave = (roomId) => {
    socket.leave(roomId);
  };

  socket.on(SOCKET_EVENT.CLIENT.LEAVE_ROOM, userLeave);
  socket.on(SOCKET_EVENT.CLIENT.JOIN_ROOM, userJoin);
};
