import React, { useEffect } from "react";
import User from "./User";

const Friends = props => {
  useEffect(() => {
    props.grabUsers();
  }, []);

  if (props.list.length)
    return (
      <div className="friendList">
        {props.list.map((user, id) => (
          <User
            key={id * Math.random()}
            user={user}
            updateUser={props.updateUser}
            delUser={props.delUser}
          />
        ))}
      </div>
    );

  return <h1>NO USERS</h1>;
};

export default Friends;
