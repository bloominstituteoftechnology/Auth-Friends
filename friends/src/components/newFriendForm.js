import styled from 'styled-components';
import React from 'react';

const NewFriendDiv = styled.div `
  display: flex;
  justify-content: center;
  margin: 10px;
  ${'' /* border: 1px solid red; */}
`;

export default class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputAge: '',
      inputEmail: '',
    }
  }

  inputHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  addFriendClick = e => {
    e.preventDefault();
    this.setState({
      inputName: '',
      inputAge: '',
      inputEmail: '',
    })
    this.props.addFriend(this.state);
  }

  render() {
    return (<NewFriendDiv>
      <form onSubmit={this.addFriendClick}>
        <input
          name="inputName"
          value={this.state.inputName}
          placeholder="new friend name"
          onChange={this.inputHandler}
          >{this.value}</input>
        <input
          name="inputAge"
          value={this.state.inputAge}
          placeholder="new friend age"
          onChange={this.inputHandler}
          >{this.value}</input>
        <input
          name="inputEmail"
          value={this.state.inputEmail}
          placeholder="new friend email"
          onChange={this.inputHandler}
          >{this.value}</input>
          <button>Submit</button>
      </form>
    </NewFriendDiv>)
  }
}
