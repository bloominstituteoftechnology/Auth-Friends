import React from 'react';
import { addFriend, loadFriends } from '../actions';
import { connect } from 'react-redux';

class CreateFriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  onSubmit = (event) => {
    console.log('submit test');
    event.preventDefault();
    const { name, age, email } = this.state;
    this.props.addFriend({ name, age, email});
    this.props.loadFriends();
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  onChange = (event) => {
    let { name, value } = event.target;
    if (event.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div>Add Friend</div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type='text' placeholder='name' name='name' value={this.state.name} require='true' />
          <input onChange={this.onChange} type='number' placeholder='age' name='age' value={this.state.age} require='true' />
          <input onChange={this.onChange} type='email' placeholder='email' name='email' value={this.state.email} require='true' />
          <button type='submit'>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addFriend, loadFriends })(CreateFriendForm);