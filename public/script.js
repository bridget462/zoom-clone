const socket = io("/");
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});

const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
// mute ourself
myVideo.muted = true;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideoStream(myVideo, stream);
  });

// when connecting peer server, get generated unique id and do things
myPeer.on("open", (id) => {
  // calling socket event listener defined at server.js
  socket.emit("join-room", ROOM_ID, id);
});

socket.on("user-connected", (userId) => {
  console.log(`user connected: ${userId}`);
});

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}
