import styled from 'styled-components';
import React from 'react';

const NewFriendDiv = styled.div `
  display: flex;
  justify-content: center;
  ${'' /* border: 1px solid red; */}
`;

export default class NewFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputAge: null,
    }
  }

  inputHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  addFriend = e => {
    e.preventDefault();
    this.setState({})
  }

  render() {
    return (<NewFriendDiv>
      <form>
        <input
          name="inputName"
          value={this.state.inputValue}
          placeholder="new friend name"
          onChange={this.inputHandler}
          >{this.value}</input>
        <input
          name="inputAge"
          value={this.state.inputValue}
          placeholder="new friend age"
          onChange={this.inputHandler}
          >{this.value}</input>
        <input
          name="inputEmail"
          value={this.state.inputValue}
          placeholder="new friend email"
          onChange={this.inputHandler}
          >{this.value}</input>
          <button>Submit</button>
      </form>
    </NewFriendDiv>)
  }
}
