import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";

const Friends = props => {
 
  return (
    <div>
      {props.fetchingFriends ? (
        <div> ...fetching your friends. do you have friends? </div>
      ) : (
        <ul>
          {props.friends.map(friend => {
            return (
              <div key={friend.id}>
                <h2>{friend.name}</h2>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
    error: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(Friends);
