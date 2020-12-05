import React from "react";
import { useParams } from "react-router-dom";

const Friend = (props) => {
  const params = useParams();

  console.log("props in the Friend component: ", props.friends);

  const friend = props.friends.find((fr) => fr.id === Number(params.id));
  console.log(params.id);
  console.log("friend: ", friend);

  return (
    <div>
      <h3>This is the Friend component</h3>
      {/* <p>Friend: {props.friend.name}</p> */}
    </div>
  );
};

export default Friend;
