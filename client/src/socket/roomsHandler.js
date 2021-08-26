import { SOCKET_EVENT } from "../redux/constants";
import { socket } from "../pages/RoomPage";

export const client = {
  createRoom: (room) => {
    socket.emit(SOCKET_EVENT.CLIENT.CREATE_ROOM, room);
  },

  getRooms: () => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_ROOMS);
  },
};

export const server = {
  sendRooms: (rooms) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_ROOMS, rooms);
  },
};
