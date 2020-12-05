import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Friend = (props) => {
  const params = useParams();
  const history = useHistory();
  const goHome = () => {
    history.push("/dashboard");
  };
  const goToFriends = () => {
    history.push("/friends");
  };

  console.log("props in the Friend component: ", props.friends);

  const friend = props.friends.find((fr) => fr.id === Number(params.id));
  console.log(params.id);
  console.log("friend: ", friend);

  return (
    <div>
      <h3>This is the Friend component</h3>

      <p>Friend: {friend.name}</p>
      <button onClick={goToFriends}>Back to Friends</button>
      <br />
      <button onClick={goHome}>Go back home</button>
    </div>
  );
};

export default Friend;
