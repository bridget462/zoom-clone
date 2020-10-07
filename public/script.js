const socket = io("/");
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});

// when connecting peer server, get generated unique id and do things
myPeer.on("open", (id) => {
  // calling socket event listener defined at server.js
  socket.emit("join-room", ROOM_ID, id);
});

socket.on("user-connected", (userId) => {
  console.log(`user connected: ${userId}`);
});
