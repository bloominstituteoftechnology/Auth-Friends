import React from 'react';
import { updateFriend, loadFriends } from '../actions';
import { connect } from 'react-redux';

class UpdateFriendForm extends React.Component {
  state = {
    index: this.props.friend.index,
    name: this.props.friend.name,
    age: this.props.friend.age,
    email: this.props.friend.email,
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.updateFriend({index: this.state.index, update: { name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }});
  }

  onChange = (event) => {
    let { name, value } = event.target;
    if (event.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name]: value });
  }


  render() {
    console.log('friend', this.state);
    return (
      <div>
        <div>Update Friend</div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type='text' placeholder='name' name='name' value={this.state.name} require='true' />
          <input onChange={this.onChange} type='number' placeholder='age' name='age' value={this.state.age} require='true' />
          <input onChange={this.onChange} type='email' placeholder='email' name='email' value={this.state.email} require='true' />
          <button type='submit'>Update Friend</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateFriend, loadFriends })(UpdateFriendForm);