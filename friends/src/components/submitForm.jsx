import React, { Component } from "react";
import { connect } from "react-redux";
import { friendsAdd,friendsDelete,friendsEdit } from "../actions/index";
 

class SubmitFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      mode: "Input",
    };
  }
  componentDidMount = () => {
 
  };
  pushFriend = e => {
    e.preventDefault();
    const payload ={age: e.target.children[2].value,
      email: e.target.children[4].value,
      name: e.target.children[0].value}
    this.props.friendsAdd(payload);
    e.target.children[4].value = "";
    e.target.children[2].value = "";
    e.target.children[0].value = "";
  };
  deleteFriend = () => {
    this.props.friendsDelete(this.props.friendID);

    // axios
    //   .delete("http://127.0.0.1:5000/friends/" + this.state.whom)
    //   .then(response => {
    //     this.props.methodToCall();
    //     this.props.history.push("/");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.props.singleUserMode(-1, "Input");
  };
  editFriend = e => {
    e.preventDefault();
    const payload ={age: e.target.children[2].value,
      email: e.target.children[4].value,
      name: e.target.children[0].value}
    this.props.friendsEdit(this.props.friendID,payload);
    e.target.children[4].value = "";
    e.target.children[2].value = "";
    e.target.children[0].value = "";
    // axios
    //   .put("http://127.0.0.1:5000/friends/" + this.state.whom, {
    //     age: e.target.children[2].value,
    //     email: e.target.children[4].value,
    //     name: e.target.children[0].value,
    //     hairColor: e.target.children[6].value
    //   })
    //   .then(response => {
    //     this.props.methodToCall();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.props.singleUserMode(-1, "Input");

  };
  deleteButton = () => {
    if (this.props.mode === "Edit") {
      return (
        <button onClick={this.deleteFriend} className="friendSubmitFormInput">
          Delete
        </button>
      );
    }
  };
  render() {
    return (
      <div className="friendForm">
        <div className="titleForm">
          {" "}
          {this.props.mode === "Input"
            ? "Add a friend to list"
            : "Edit your friend"}{" "}
        </div>
        <form
          className="friendSubmitForm"
          onSubmit={
            this.props.mode === "Input" ? this.pushFriend : this.editFriend
          }
        >
          <input
            className="friendSubmitFormInput"
            required
            placeholder="Name"
            type="text"
            id="formName"
          />
          <br />
          <input
            required
            className="friendSubmitFormInput"
            placeholder="Age"
            type="number"
            id="formAge"
          />
          <br />
          <input
            required
            className="friendSubmitFormInput"
            placeholder="Email"
            type="text"
            id="formEmail"
          />
          <br />
          
          
          <button className="friendSubmitFormInput">
            {" "}
            {this.props.mode === "Input" ? "Submit" : "Edit"}
          </button>
        </form>
        {this.deleteButton()}
      </div>
    );
  }
}


export default connect(
  null,
  {friendsAdd,friendsDelete,friendsEdit}
)(SubmitFriendForm);
