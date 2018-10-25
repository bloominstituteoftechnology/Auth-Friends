import React, { Component } from "react";
import { connect } from 'react-redux';

import {addFriend} from '../actions'

class AddFriend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: null,
      email: ""
    };
  }

  addFriend = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, email } = this.state;

  this.props.addFriend({ name, age, email });

    this.setState({
      name: "",
      age: null,
      email: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="friendAddForm">
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("FriendList mapState", state);
  return { 
  }; 
};


export default connect(
  mapStateToProps, 
  { addFriend }
  )(AddFriend);
