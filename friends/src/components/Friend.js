import React from "react";
import { connect } from "react-redux";
import { editFriend } from "../actions/index.js";

const Friend = props => {
  if (props.friends) {
    const { id, name, age, email } = props.friends;
    return (
      <section>
        <h2>{name}</h2>
        <h4>{age}</h4>
        <h4>{email}</h4>
        <button onClick={()=> {props.editFriend(id)}}>Edit</button>
      </section>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { friends: state.friends.find(friend => id === friend.id) || null };
};

export default connect(
  mapStateToProps,
  { editFriend }
)(Friend);
