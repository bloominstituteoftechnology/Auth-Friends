import React, { Component } from "react";
import { connect } from "react-redux";
import { createFriend } from "../actions";

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    };
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddFriend = _ => {
        const { name, age, email } = this.state;
        this.props.createFriend({ name, age, email });
        this.setState({ name: '', age: '', email: '' });
    };
    render() {
        return (
          <form className="friendForm">
            <input
              className="input"
              value={this.state.name}
              name="name"
              type="text"
              placeholder="What is your friends name?"
              onChange={this.handleInputChange}
            />
            <input
              className="age"
              value={this.state.age}
              name="age"
              type="text"
              placeholder="How old is your friend?"
              onChange={this.handleInputChange}
            />
            <input
              className="input"
              value={this.state.email}
              name="email"
              type="text"
              placeholder="What is your friends email?"
              onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleAddFriend()} type="button">
              Add New Friend
            </button>
          </form>
        );
      }
    }
    
    const mapStateToProps = state => {
      return {
        error: state.error,
        creatingFriend: state.creatingFriend
      };
    };

    export default connect(mapStateToProps, { createFriend })(FriendForm);