import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Friend = (props) => {
  console.log("Props in the Friend component: ", props.friends);
  const params = useParams();
  const history = useHistory();
  const goHome = () => {
    history.push("/dashboard");
  };
  const goToFriends = () => {
    history.push("/friends");
  };

  const friend = props.friends.find((fr) => fr.id === Number(params.id));

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

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};
export default connect(mapStateToProps, {})(Friend);
