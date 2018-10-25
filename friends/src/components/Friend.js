import React from "react";
import "./styles.css";

const Friend = props => {
  return (
    <li>
      {/* <button onClick={() => props.deleteFriend(props.friend.id)}>
        DELETE
      </button> */}
      {props.friend.name}
    </li>
  );
};

export default Friend;
