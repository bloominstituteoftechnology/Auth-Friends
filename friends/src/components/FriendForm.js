import React from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';

class FriendForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form onSubmit={() => this.props.addFriendHandler(this.state)}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
          />
          <div className="baseline" />
          <input
            onChange={this.changeHandler}
            type="text"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <div className="baseline" />
          <input
            onChange={this.changeHandler}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="eimal"
          />
          
          <button className="form-button">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;