import React from "react";
import { connect } from "react-redux";
import { deleteFriend, toggleUpdate, pickOneFriend } from "../actions";

class Friends extends React.Component {
  render() {
    const {
      friends,
      deleteFriend,
      canUpdate,
      toggleUupdate,
      pickOneFriend
    } = this.props;
    return (
      <div className="friend-card">
        {friends.map(friend => (
          <ul key={friend.id}>{friend.name}</ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deleting: state.friendsReducer.deletingFriend,
    error: state.friendsReducer.error,
    canUpdate: state.soloReducer.canUpdate,
    thisFriend: state.soloReducer.thisFriend
  };
};

export default connect(
  mapStateToProps,
  { deleteFriend, toggleUpdate, pickOneFriend }
)(Friends);

{
  /* <h2>Sup</h2>
{this.props.error && <h2>Error loading friends...</h2>}

{this.props.fetching ? (
  <h3>Loading friends..</h3>
) : (
  friends.map(friend => (
    <div key={friend.id} onClick={() => pickOneFriend(friend)}>
      {friend.name}
    </div>
  ))
)}
{this.props.canUpdate ? <div>neat</div> : null} */
}
