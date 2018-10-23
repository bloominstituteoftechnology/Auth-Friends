import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend } from '../actions';
import Friends from './Friends';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      email: '',
    }
  }

  componentDidMount() {
    this.props.getFriends();
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.name !== '' && this.state.age !== null && this.state.email !== '') {
      let friend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
      this.props.addFriend(friend);
      event.target.reset();
    }
  }

  render() {
    return (
      <div className="App">
        <nav>Friends App</nav>
        <div className='wrapper'>
          <Form changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
          {this.props.got ? <Friends friends={this.props.friends} deleteHandler={this.props.deleteFriend}/> : <div>Loading friends...</div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    got: state.got
  }
}

export default connect(mapStateToProps, {getFriends, addFriend, deleteFriend})(App);