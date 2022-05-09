import React, { useEffect, useState } from "react";
import { getUsers } from "./users";

export default function HomeContent() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="home-content">
      {users.map((user) => (
        <div className="user" key={user.id}>
          {user.username}
        </div>
      ))}
    </div>
  );
}
