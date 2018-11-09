import React, {Component} from "react";
import { connect } from 'react-redux';

import { updateFriend } from '../actions';

import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
`;

class UpdateFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount() {
    const { friends, match } = this.props;
    const friend = friends.find(item => item.id === match.params.id)
    this.setState(friend)
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.updateFriend(this.state);
  }

  render() {
    return (
      <FormContainer onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder=" Name" />
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder=" Age" />
        <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} placeholder=" Email" />
        <button type="submit">Update</button>
      </FormContainer>
    );
  }
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { updateFriend })(UpdateFriendForm);