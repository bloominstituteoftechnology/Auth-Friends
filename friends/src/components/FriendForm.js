import React, { Component } from 'react';

class FriendForm extends Component{
  constructor(){
    super();
    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount(){
    if(this.props.editing === "true"){
      this.setState({ id: this.props.id, name: this.props.name, age: this.props.age, email: this.props.email});
    }
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.editing === "true"){
      const updatedFriend = {
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email
      };
      this.props.save(this.props.id, updatedFriend);
    }else{
        const newFriend = {
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email
        };
      this.props.save(newFriend);
      this.setState({id: '', name: '', age: '', email: ''});
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
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

export default FriendForm;
