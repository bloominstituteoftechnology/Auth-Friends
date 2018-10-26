import React, { Component } from "react";
import styled from "styled-components";
import { Edit, X } from "../assets";
import Form from "./Form";
import { connect } from "react-redux";
import { updateFriend, deleteFriend } from "../actions";

const FriendCard = styled.div`
  position: relative;
  background: #fee800a6;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
  text-align: center;
  h4 {
    margin: 5px 0;
  }
  div {
    position: absolute;
    top: 2px;
    right: 5px;
    cursor: pointer;
  }
`;
class Friend extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: this.props.friend.name,
      email: this.props.friend.email,
      age: this.props.friend.age,
      displayForm: false
    };
  }

  changeHandler = e => {
    e.preventDefault();
    const key = e.target.name;
    this.setState({ [key]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let friendObj = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      id: this.props.friend.id
    };

    this.toggleForm();
  };

  removeFriend = e => {
    let id = e.target.id;
    this.props.deleteFriend(id);
  };

  toggleForm = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  render() {
    return (
      <FriendCard>
        <h4>{this.props.friend.name}</h4>
        <p>age: {this.props.friend.age}</p>
        <p>email: {this.props.friend.email}</p>
        <div>
          <Edit toggleForm={this.toggleForm} />
          <X removeFriend={this.removeFriend} id={this.props.friend.id} />
        </div>
        <span className={this.state.displayForm ? "" : "none"}>
          <Form
            card
            state={this.state}
            changeHandler={this.changeHandler}
            submitHandler={this.submitHandler}
          />
        </span>
      </FriendCard>
    );
  }
}
export default connect(
  null,
  { updateFriend, deleteFriend }
)(Friend);
