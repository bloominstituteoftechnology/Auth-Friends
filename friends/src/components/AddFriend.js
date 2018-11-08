import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  };

  // Take the text typed into the input form & add to local state
  handleInput = (event) => {
    this.setState( {[event.target.name]: event.target.value} );
  };

  // Submit the form
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input name='name' value={this.state.name} onChange={this.handleInput} placeholder='Name' />
        <input name='age' value={this.state.age} onChange={this.handleInput} placeholder='Age' />
        <input name='email' value={this.state.email} onChange={this.handleInput} placeholder='Email' />
        <button type='submit'>Add Friend</button>
      </form>
    );
  }

};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {addFriend: addFriend})(AddFriend);