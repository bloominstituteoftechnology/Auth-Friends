import React, { Component } from "react";
import { connect } from "react-redux";

import { saveFriends, fetchFriends } from "../actions/actions";

class FriendsForm extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       age: "",
  //       email: ""
  //     };
  //   }

  // const URL = "http://localhost:5000/api/Friends";

  editFriendsHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitFriend = () => {
    this.props.saveFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
  };

  // handleSubmitFriend = () => {
  //   const friend = {
  //     name: this.state.name,
  //     age: Number(this.state.age),
  //     email: this.state.email
  //   };
  //   axios.post(URL, friend).then(response => {
  //     this.props.handleSetData(response.data);
  //     this.setState({
  //       friendsData: response.data,
  //       name: "",
  //       age: "",
  //       email: ""
  //     }).catch(error => {
  //       console.log(error);
  //     });
  //   });
  // };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            onChange={this.editFriendsHandler}
            // value={this.state.name}
            placeholder="add friend name"
          />
          <br />
          <input
            type="number"
            name="age"
            onChange={this.editFriendsHandler}
            // value={this.state.age}
            placeholder="add age"
          />
          <br />
          <input
            type="text"
            name="email"
            onChange={this.editFriendsHandler}
            // value={this.state.email}
            placeholder="add email"
          />
          <br />
          <button onClick={this.handleSubmitFriend}>Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    addingFriend: state.friends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    saveFriends,
    fetchFriends
  }
)(FriendsForm);
