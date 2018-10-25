import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import Friends from './components/Friends';
import {connect}  from 'react-redux';
import {friendsReducer} from './reducer/index';

class App extends Component {
  state = {
    friends: this.props.friends,
    newFriend: {
      name: '',
      age: '',
      email: ''
    },
    delete: false
  }

  handleInput = (e) => {
    this.setState({newFriend: { ...this.state.newFriend, [e.target.name]: e.target.value}})
  }

  addFriend = () => {
    this.props.addFriend(this.state.newFriend)
    this.setState({newFriend: {
    name: '',
    age: '',
    email: ''}})
  } 
  deleteFriend = (id) => {
    this.props.deleteFriend(id);
  }

  deleteState = () => {
    this.setState({delete: !this.state.delete})
  }




  componentDidMount(){
    this.props.fetchFriends()
  }
  render() {
    return (
      <div className="App">
      <Friends friends={this.props.friends} delete={this.state.delete} deleteFriend={this.deleteFriend}/>
      <form>
        <input name="name" type='text' onChange={this.handleInput} placeholder='NAME' value={this.state.newFriend.name} />
        <input name="age"  type='text' onChange={this.handleInput} placeholder='AGE' value={this.state.newFriend.age} />
        <input name="email"  type='text' onChange={this.handleInput} placeholder='EMAIL' value={this.state.newFriend.email} />
        <div className='btn' onClick={this.addFriend}>ADD FRIEND</div>
        <div className='btn' onClick={this.deleteState}>DELETE A FRIEND</div>
      </form>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends
  }
}

export default connect(mapStateToProps, actions)(App);
