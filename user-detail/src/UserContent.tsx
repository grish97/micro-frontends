import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserById } from "home/users";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getUserById(id).then((res: any) => {
        if (res) {
          setUser(res);
        }
      });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <div className="user-detail">
      <div className="user-id">
        {user ? (
          <div className="name">{user.username}</div>
        ) : (
          <div className="not-found">User not found</div>
        )}
      </div>
    </div>
  );
}
