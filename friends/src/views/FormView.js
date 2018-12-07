import React from "react";
import { connect } from "react-redux";
import { addFriend } from "../store/actions";
import FriendForm from "../components/FriendForm";
import EditFriendForm from "../components/EditFriendForm";

function FormView() {
  return (
    <>
      <FriendForm />
      <EditFriendForm/>
    </>
  );
}

export default connect(
  null,
  { addFriend }
)(FormView);
