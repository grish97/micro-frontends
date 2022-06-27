import event from "../constants";
export default function messageHandler(io, socket) {
    function createMessage() { }
    socket.on(event.MESSAGE_CREATE, createMessage);
}
//# sourceMappingURL=message.js.map