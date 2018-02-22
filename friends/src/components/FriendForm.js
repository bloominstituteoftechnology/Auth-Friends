import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends React.Component {
  state = {
    newFriend: '',
  };
  
  handleAddFriend = (event) => {
    event.preventDefault()
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend: '',
    });
  }

  handleOnchange = (event) => {
    this.setState({
      newFriend: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddFriend}>
          <input
            onChange={this.handleOnchange}
            placeholder='Enter new friend'
            value={this.state.newFriend}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addFriend })(AddTodo);