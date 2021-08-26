const express = require("express");

const RoomCtrl = require("../controllers/room-ctrl");

const router = express.Router();

router.post("/room", RoomCtrl.createRoom);
router.get("/rooms", RoomCtrl.getRooms);

module.exports = router;
