import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriend } from '../actions'

import './CreateFriendForm.css'
class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handleInput = event => {
      this.setState({ [event.target.name]: event.target.value});
    }

    submitFriend = event => {
      event.preventDefault();
      this.props.postFriend({
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      });
      this.setState({
        name: '',
        age: '',
        email: '',
      });
    };

        render(){
            return (
              <form className="divInputs" onSubmit={this.submitFriend}>    
                  <input 
                  required 
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  autoComplete="name"
                  onChange={this.handleInput} 
                  />
                  <input 
                  required 
                  name="age"
                  type="number" 
                  placeholder="Enter age" 
                  onChange={this.handleInput}
                  />
                  <input
                  required 
                  name="email"
                  type="text" 
                  placeholder="Enter email"
                  autoComplete="email"
                  onChange={this.handleInput}
                  />
                  <button type="submit">Add Friend</button>
              </form>    
            )
        }
}

const mapStateToProps = state => {
  return {
    savingFriends: state.savingFriends,
    error: state.error
  };
};

export default connect(mapStateToProps, { postFriend })(CreateFriendForm);