import React from "react";
import { useParams, useHistory, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import Edit from "./Edit";

const Friend = (props) => {
  console.log("Props in the Friend component: ", props.friends);
  const params = useParams();
  const history = useHistory();

  const goToFriends = () => {
    history.push("/dashboard/friends");
  };

  const friend = props.friends.find((fr) => fr.id === Number(params.id));

  return (
    <div>
      <h3>This is the Friend component</h3>

      <p>Friend: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>

      <button onClick={goToFriends}>Back to Friends</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};
export default connect(mapStateToProps, {})(Friend);
