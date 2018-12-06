import React, { Component } from "react";
import styled from "styled-components";
import { addFriend } from "../store/actions";
import { connect } from "react-redux";

const StyledForm = styled.form`
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
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
    this.props.addFriend(data);
    this.setState({
      name: "",
      age: 0,
      email: ""
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Friends Name..."
          value={this.props.name}
          onChange={this.onInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Friends Age..."
          value={this.props.age}
          onChange={this.onInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Friends Email..."
          value={this.props.email}
          onChange={this.onInputChange}
        />
        <button>Add Friend</button>
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
