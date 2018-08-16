import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import { connect } from 'react-redux';
import * as actions from './actions';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: ''
    }
  }
  componentDidMount(){
    this.props.fetchFriends();
  }

  addFriend = event => {
    event.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.props.addFriend(newFriend);
    this.setState({
      name: '',
      age: 0,
      email: ''
    })
  }

  handleDelete = event => {
    console.log(event.target.id);
    this.props.deleteFriend(event.target.id);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} handleDelete={this.handleDelete} />
        <FriendForm handleSubmit={this.addFriend} handleChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mapStateToProps, actions)(App);
