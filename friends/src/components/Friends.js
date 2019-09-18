import React, { useEffect } from "react";
import Add from "./Add";
import User from "./User";

const Friends = props => {
  useEffect(() => {
    props.grabUsers();
  }, []);

  if (props.list.length)
    return (
      <>
        {props.list.map((user, id) => (
          <User
            key={id * Math.random()}
            user={user}
            updateUser={props.updateUser}
            delUser={props.delUser}
          />
        ))}

        <Add addUser={props.addUser} />
      </>
    );

  return <h1>NO USERS</h1>;
};

export default Friends;
