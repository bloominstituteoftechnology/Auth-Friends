import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {addFriend} from '../actions'

const Form = styled.form`
  background: #fee800a6;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
  input {
    background: lightblue;
    border: none;
    margin: 0 5px;
    border-radius: 10px;
    padding: 2px 10px;
    font-weight: bold;
    color: darkblue;
    text-align:center;
    &:focus{
        text-align:left;
    }
  }
  button {
    border-radius: 10px;
    margin: 10px 5px 0;
    padding: 2px 45px;
    background: #fee800;
    box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
    border-style: none;
    border: 1px solid lightblue;
    cursor: pointer;
    font-weight: bold;
    color: darkblue; 
  }
`;

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }

  changeHandler = e => {
    e.preventDefault();
    const key = e.target.name;
    this.setState({[key]:e.target.value});
  };

  submitHandler = e => {
      e.preventDefault()
      let friendObj = {...this.state}
      this.props.addFriend(friendObj)
      this.setState({
        name: "",
        email: "",
        age: ""
      })
  }
  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <input
          type="text"
          name='name'
          value={this.state.name}
          onChange={this.changeHandler}
          placeholder='name'
        />
        <input
          type="email"
          name='email'
          value={this.state.email}
          onChange={this.changeHandler}
          placeholder='bestie@friend.com'
        />
        <input
          type="number"
          name='age'
          value={this.state.age}
          onChange={this.changeHandler}
          placeholder='age'
        />
        <button type='submit'>Add Friend</button>
      </Form>
    );
  }
}

export default connect(null, {addFriend})(FriendForm);
