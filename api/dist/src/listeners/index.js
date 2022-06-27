import { Server as SocketIoServer } from "socket.io";
import event from "./constants";
import userHandler from "./handlers/user";
import messageHandler from "./handlers/message";
export default function useSocketIo(server) {
    const io = new SocketIoServer(server, {
        cors: {
            origin: "http://localhost:3005",
        },
    });
    io.on(event.CONNECTION, (socket) => {
        console.log("Socket connected!");
        userHandler(io, socket);
        messageHandler(io, socket);
    });
}
//# sourceMappingURL=index.js.map