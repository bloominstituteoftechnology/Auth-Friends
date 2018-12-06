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
  border-bottom: 3px solid gray;
  &::placeholder {
    text-transform: uppercase;
    color: darkred;
  }
`;

const Button = styled.button`
  color: darkred;
  font-weight: bold;
  text-transform: uppercase;
`;

class Form extends Component {
  state = {
    name: "",
    age: 0,
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
        age: 0,
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
          type="text"
          name="name"
          placeholder="Friends Name..."
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <Input
          type="number"
          name="age"
          placeholder="Friends Age..."
          value={this.state.age}
          onChange={this.onInputChange}
        />
        <Input
          type="email"
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
