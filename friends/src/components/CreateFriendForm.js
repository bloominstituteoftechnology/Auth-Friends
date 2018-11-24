import React, { Component } from "react";

class CreateFriendForm extends Component {
  render() {
    return (
      <form onChange = {this.props.inputHandler}>
        <input type="text" value={this.props.name} placeholder="...name" />
        <input type="number" value={this.props.age} placeholder="...age" />
        <input type="email" value={this.props.email} placeholder="...email" />
        <button onClick={this.props.addNewFriend}>Keep Friend</button>
      </form>
    );
  }
}

export default CreateFriendForm;
