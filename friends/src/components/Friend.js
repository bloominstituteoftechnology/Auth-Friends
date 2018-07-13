import React from "react";
import { connect } from "react-redux";
import { deleteFriend, submitEdit } from "../actions/action";

class Friend extends React.Component {
  constructor() {
    super();
    this.state = {
      editedName: "",
      editedAge: "",
      editedEmail: "",
      update: false
    };
  }
  updateFriend = event => {
    event.preventDefault();
    this.setState({ update: !this.state.update });
  };
  inputEdit = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitEdit = event => {
    event.preventDefault();
    let editedFriends = {
      name: this.state.editedName,
      age: this.state.editedAge,
      email: this.state.editedEmail
    };
    this.props.submitEdit(editedFriends, this.props.friend.id);
    this.setState({ editedName: "", editedAge: "", editedEmail: "" });
  };

  render() {
    console.log("this.props: ", this.props);
    console.log("this.props: ", this.props.deleteFriend);
    return (
      <div>
        <p>Name: {this.props.friend.name}</p>
        <p>Age: {this.props.friend.age}</p>
        <p>Email: {this.props.friend.email}</p>
        {this.state.update ? (
          <form>
            <input
              onChange={this.inputEdit}
              name="editedName"
              placeholder="edit name"
              value={this.state.editedName}
            />
            <input
              onChange={this.inputEdit}
              name="editedAge"
              placeholder="edit age"
              value={this.state.editedAge}
            />
            <input
              onChange={this.inputEdit}
              name="editedEmail"
              placeholder="edit email"
              value={this.state.editedEmail}
            />
            <button onClick={this.submitEdit}>Confirm Edit</button>
          </form>
        ) : null}
        <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>
          Delete
        </button>
        <button onClick={this.updateFriend}>Update</button>
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
  { deleteFriend, submitEdit }
)(Friend);
