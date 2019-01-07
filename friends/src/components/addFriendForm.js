import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 25px;
  padding: 25px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const InputSubmit = styled.input`
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  clearInputs = () => {
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      this.props.addFriend(this.state);
      this.clearInputs();
    }
  };

  render() {
    return (
      <>
        <Form>
          <Label>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Enter friend name..'
            autoComplete='off'
            onChange={e => this.handleInputChange(e)}
            value={this.state.name}
          />
          <Label>Age</Label>
          <Input
            type='number'
            id='age'
            name='age'
            placeholder='Enter friend age..'
            autoComplete='off'
            onChange={e => this.handleInputChange(e)}
            value={this.state.age}
          />
          <Label>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter friend email..'
            autoComplete='off'
            onChange={e => this.handleInputChange(e)}
            value={this.state.email}
          />
          <InputSubmit
            type='submit'
            value='Add Friend'
            onClick={e => this.submitHandler(e)}
          />
        </Form>
      </>
    );
  }
}

// AddFriendForm.propTypes = {
//   propertyName: PropTypes.string
// }

export default AddFriendForm;
