import React from "react";
import PropTypes from "prop-types";

const FriendsList = props => {
  return props.crudStates.postingFriend ||
    props.crudStates.gettingFriends ||
    props.crudStates.puttingFriend ||
    props.crudStates
      .deletingFriend (
    <p>Getting friends. Please wait. :)</p>
  ) ;};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string
    })
  ).isRequired,
  crudStates: PropTypes.shape({
    postingFriend: PropTypes.bool.isRequired,
    postedFriend: PropTypes.bool,
    gettingFriends: PropTypes.bool.isRequired,
    gotFriends: PropTypes.bool,
    puttingFriend: PropTypes.bool.isRequired,
    putFriend: PropTypes.bool,
    deletingFriend: PropTypes.bool.isRequired,
    deletedFriend: PropTypes.bool,
    crudError: PropTypes.string
  }),
  editHandler: PropTypes.func,
  deleteFriend: PropTypes.func
};

export default FriendsList;
