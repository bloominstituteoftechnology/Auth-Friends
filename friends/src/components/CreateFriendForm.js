import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class CreateFriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  submitNewFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState( {
      name: '',
      age: '',
      email: '',
    });
  }

  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitNewFriend}>
          <input
            type='text'
            onChange={this.updateField}
            placeholder='name'
            value={this.state.name}
            name='name'
            required
          />
          <input
            type='number'
            onChange={this.updateField}
            placeholder='age'
            value={this.state.age}
            name='age'
            required
          />
          <input
            type='email'
            onChange={this.updateField}
            placeholder='email'
            value={this.state.email}
            name='email'
            required
          />
        <button type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFriend })(CreateFriendForm);
