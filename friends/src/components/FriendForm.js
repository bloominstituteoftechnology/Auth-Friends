import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriends } from '../actions';

import './FriendForm.css'

class FriendForm extends Component {
constructor(){
  super()
  this.state = {
    name: '',
    age: '',
    email: ''
  };
}

  // componentDidMount(){
  //     this.props.addFriends()
  // }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddFriend = event => {
    const { name, age, email } = this.state;
    this.props.addFriends({name, age, email});
    this.setState({name: '', age: '', email: ''});
  };

  render() {
      return (
        <form className='Friend__Form'>
        <input 
        className="Friend__Input"
        value={this.state.name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={this.handleInputChange}
      />
      <input
        className="Friend__Input"
        value={this.state.age}
        name="age"
        type="text"
        placeholder="Age"
        onChange={this.handleInputChange}
      />
      <input
        className="Friend__Input"
        value={this.state.email}
        name="email"
        type="text"
        placeholder="Email"
        onChange={this.handleInputChange}
      />
        <button onClick={this.handleAddFriend}>Button</button>
        </form>
        
      )
  }
}

const mapStateToProps = state => {
    return{
        error: state.errorMessage,
        addingFriends: state.addingFriends
    }
}

export default connect(mapStateToProps, { addFriends })(FriendForm)