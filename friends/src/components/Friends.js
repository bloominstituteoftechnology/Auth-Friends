import React from "react";
import { connect } from "react-redux";
import SingleFriend from "./SingleFriend";
import UpdateFriend from "./UpdateFriend";
import { deleteFriend, toggleUpdate, pickOneFriend } from "../actions";

class Friends extends React.Component {
  toggleUpdate = () => {
    this.props.toggleUpdate();
  };

  delete = () => {
    const { id } = this.props.thisFriend;
    this.props.deleteFriend(id);
    this.props.pickOneFriend({});
  };

  render() {
    const { friends, canUpdate, thisFriend, pickOneFriend } = this.props;
    return (
      <div className="friend-card">
        <ul>
          {friends.map(friend => (
            <li key={friend.id} onClick={() => pickOneFriend(friend)}>
              {friend.name}
            </li>
          ))}
        </ul>

        {Object.keys(thisFriend).length > 0 ? (
          <SingleFriend
            friends={friends}
            erase={this.delete}
            toggle={this.toggleUpdate}
            pick={pickOneFriend}
          />
        ) : null}

        {canUpdate ? <UpdateFriend friend={thisFriend} /> : null}
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
