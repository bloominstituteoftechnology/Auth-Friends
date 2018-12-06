import React, { Component } from "react";
import styled from "styled-components";
import { addFriend } from "../store/actions";
import { connect } from "react-redux";

const StyledForm = styled.form`
  padding: 40px 20px 20px;
  max-width: 500px;
  margin: 0 auto 20px;
`;

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  background: lightgray;
  padding: 10px;
  outline: none;
  border: none;
  transition: border-bottom 0.3s ease-in-out;
  border-bottom: 3px solid gray;
  &::placeholder {
    text-transform: uppercase;
    color: darkred;
  }

  &:focus {
    border-bottom: 3px solid green;
  }
`;

const Button = styled.button`
  color: darkred;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid gray;
  position: relative;
  box-shadow: 0 4px gray;
  cursor: pointer;
  outline: none;
  padding: 10px 25px;
  letter-spacing: 2px;

  &:hover {
    top: 2px;
    box-shadow: 0 2px gray;
  }

  &:active {
    top: 4px;
    box-shadow: none;
  }
`;

class Form extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    let data = this.state;
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      this.props.addFriend(data);
      this.setState({
        name: "",
        age: "",
        email: ""
      });
    }
    return null;
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <H1>Add A Friend</H1>
        <Input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Friends Name..."
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <Input
          autoComplete="off"
          type="number"
          name="age"
          min="1"
          placeholder="Friends Age..."
          value={this.state.age}
          onChange={this.onInputChange}
        />
        <Input
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Friends Email..."
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <Button>Add Friend</Button>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingFriends: state.fetchingFriends
});

export default connect(
  mapStateToProps,
  { addFriend }
)(Form);
