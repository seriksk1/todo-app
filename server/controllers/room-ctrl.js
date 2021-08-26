const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const RoomService = require("../services/room-service");
const bodyValidator = require("../helpers/bodyValidator");

const createRoom = async (req, res, next) => {
  try {
    const body = req.body;
    bodyValidator(body, "You must provide a body to create room");
    console.log(req.body);

    const room = await RoomService.createRoom(body);
    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      item: room,
      message: "Room created!",
    });
  } catch (err) {
    next(err);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const rooms = await RoomService.getRooms();
    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      items: rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createRoom,
  getRooms,
};
