import React from "react";
import { connect } from "react-redux";
import { addFriend } from "../store/actions";
import FriendForm from "../components/FriendForm";

function FormView() {
  return <FriendForm />;
}

export default connect(
  null,
  { addFriend }
)(FormView);
