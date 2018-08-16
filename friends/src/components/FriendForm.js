import React, { Component } from 'react';

class FriendForm extends Component{
  constructor(){
    super();
    this.state = {
      id: props.id,
      name: props.name,
      age: props.age,
      email: props.email,
    }
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    //trigger redux-thunk call passing in the data
  }

  render(){
    return(
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          placeholder="Enter Name..."
          onChange={this.handleInput}
        />
        <label htmlFor="age">Name: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={this.state.age}
          onChange={this.handleInput}
        />
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={this.state.email}
          placeholder="Enter E-Mail..."
          onChange={this.handleInput}
        />
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

FriendForm.defaultProps = {
  id: null,
  name: '',
  age: null,
  email: '',
}

export default FriendForm;
