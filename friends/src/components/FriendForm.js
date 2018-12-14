import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../store/actions';

class FriendForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
  };

  render(){
    return(
      <form onSubmit={this.submitHandler}>
          <input
              type='text'
              name='name'
              placeholder='Name'
              onChange={this.handleChange}
              value={this.state.name}
            />

            <input
              type='text'
              name='age'
              placeholder='Age'
              onChange={this.handleChange}
              value={this.state.age}
            />

            <input
              type='text'
              name='email'
              placeholder='E-mail'
              onChange={this.handleChange}
              value={this.state.email}
            />
          <button type='submit'>Add Friend</button>
      </form>
    )
  }
};

const mapStateToProps = state => {
  return{
    createFriend: state.createFriend
  }
}

export default connect(mapStateToProps, { addFriend })(FriendForm)
