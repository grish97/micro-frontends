import event from "../constants";
export default function userHandler(io, socket) {
    function connected(userId) {
        console.log(userId);
    }
    function disconnected(userId) {
        console.log(userId);
    }
    socket.on(event.USER_CONNECTED, connected);
    socket.on(event.USER_CONNECTED, disconnected);
}
//# sourceMappingURL=user.js.map