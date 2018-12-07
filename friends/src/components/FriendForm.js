import React from 'react';
import { connect } from 'react-redux';

import { addFriend, updateFriend } from '../actions';

class FriendForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: 0,
      email: ''

    }

  }

  componentDidUpdate(prevProps) {

    console.log(this.props);

    if (this.props.friendToUpdate && this.props.friendToUpdate !== prevProps.friendToUpdate) {

      this.setState(this.props.friendToUpdate);

    }

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    });

  }

  handleSubmit = e => {

    e.preventDefault();

    if (this.props.friendToUpdate)
      this.props.updateFriend(this.state);

    else
      this.props.addFriend(this.state);

    this.setState({

      name: '',
      age: 0,
      email: ''

    });

  }

  render() {

    return (

      <form className='friend-form' onSubmit={this.handleSubmit}>

        <input type='text' name='name' value={this.state.name} placeholder='name' onChange={this.handleChange} />
        <input type='number' name='age' value={this.state.age} placeholder='age' onChange={this.handleChange} />
        <input type='email' name='email' value={this.state.email} placeholder='email' onChange={this.handleChange} />
        <button>{this.props.friendToUpdate ? 'Update Friend!' : 'Add friend!'}</button>

      </form>

    );

  }

}

function mapStateToProps(state) {

  return {

    friendToUpdate: state.friendToUpdate

  }

}

export default connect(mapStateToProps, { addFriend, updateFriend })(FriendForm);
