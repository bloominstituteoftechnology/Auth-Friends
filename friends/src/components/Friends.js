import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import UpdateFriendForm from "./UpdateFriendForm";

class Friends extends Component {

  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
  }

  componentDidMount() {
    this.props.getFriends();
  }

  updateToggle = () => {
    const active = this.state.update;
    this.setState({update: !active});
  }

  render() {
    return this.props.fetchingFriends ? (
      <h2>Loading...</h2>
    ) : (
      this.props.friends.map((friend, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{`Name: ${friend.name}`}</li>
              <li>{`Age: ${friend.age}`}</li>
              <li>{`Email: ${friend.email}`}</li>
            </ul>
            <button onClick={this.updateToggle}>Update</button>
            {this.state.update ? <UpdateFriendForm data={this.props.friend} index={this.props.index} /> : null}
          </div>
        );
      })
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error
  };
};

// export default Friends;
export default connect(mapStateToProps, { getFriends })(Friends);
