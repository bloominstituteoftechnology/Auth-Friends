import React, { Component } from 'react';
import {GET_FRIENDS} from '../actions/index';
import { connect } from 'react-redux';

class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: ''

    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <h1>Friend Form Here</h1>
        <form onSubmit = {this.submitHandler}>
          <input onChange={this.handleChange} placeholder="name"></input>
          <input onChange={this.handleChange} placeholder="age"></input>
          <input onChange={this.handleChange} placeholder="email"></input>
          <button>Submit</button>


        </form>

      </div>
    )
  }
}
const mapStateToProps = () =>{
{}
}

export default connect(mapStateToProps, {GET_FRIENDS})(FriendForm);
