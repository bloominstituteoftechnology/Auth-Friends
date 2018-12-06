import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addFriend} from '../actions';

const StyledForm = styled.form`
  background-color: blue;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    this.props.addFriend({
      ...this.state,
    });
  };

  render() {
    const createInput = (name, type = 'text') => {
      return (
        <input
          type={type}
          placeholder={name}
          name={name}
          value={this.state[name]}
          onChange={this.handleChange}
        />
      );
    };
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        {createInput('name')}
        {createInput('age', 'number')}
        {createInput('email', 'email')}
        <input type="submit" />
      </StyledForm>
    );
  }
}

export default connect(
  null,
  {addFriend},
)(FriendForm);
