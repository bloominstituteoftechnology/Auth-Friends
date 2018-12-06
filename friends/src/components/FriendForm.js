import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class FriendForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: 0,
      email: ''

    }

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    });

  }

  handleSubmit = e => {

    e.preventDefault();

    this.props.addFriend(this.state);

    this.setState({

      name: '',
      age: 0,
      email: ''

    });

  }

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        <input type='number' name='age' value={this.state.age} onChange={this.handleChange} />
        <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
        <button>Add friend!</button>

      </form>

    );

  }

}

export default connect(null, { addFriend })(FriendForm);
