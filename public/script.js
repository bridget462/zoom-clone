const socket = io("/");

// calling socket event listener defined at server.js
socket.emit("join-room", ROOM_ID, 10);
