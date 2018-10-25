import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFriends, editFriend } from "../actions";
import CreateFriendForm from "./CreateFriendForm";

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <CreateFriendForm />
        {this.props.friends.map(friend => (
          <div key={friend.id}>
            <Link to={`/${friend.id}`}>
              <h1>{friend.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, editFriend }
)(Friends);
