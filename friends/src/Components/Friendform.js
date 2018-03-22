import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriend } from '../Actions';
// import css
import './Friendform.css';
// restructured code for readability
// multiple components changed
class CreateFriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  addFriend = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitFriend = event => {
    event.preventDefault();
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    };
    this.props.postFriend(friend);
    console.log(friend);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };
// restrctured html within render
  render() {
    return (
      <div className="Form-bg">
        <form className="Add-form">
          <input
            className="Name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.addFriend}
          />
          <input
            className="Age"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.addFriend}
          />
          <input
            className="Email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.addFriend}
          />
        <button className="Add-button" onClick={this.submitFriend}>Add Friend</button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};
// connect props, post, and form
export default connect(mapStateToProps, { postFriend })(CreateFriendForm);
