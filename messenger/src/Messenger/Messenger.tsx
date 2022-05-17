import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";

import "./Messenger.scss";

export default function Messenger() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const socketIo = io("http://localhost:8000");

    socketIo.emit("user:connected", {
      userId: "627560c209d827ca6f79be09",
    });

    setIsOnline(true);

    return () => {
      socketIo.emit("user:disconnected", {
        userId: "627560c209d827ca6f79be09",
      });
    };
  }, []);

  return (
    <div className="messenger-app">
      User {isOnline ? "online" : "last seen recently"}
    </div>
  );
}
