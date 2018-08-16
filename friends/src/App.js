import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import { connect } from 'react-redux';
import * as actions from './actions';
import FriendForm from './components/FriendForm';
import FriendUpdate from './components/FriendUpdate';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: '',
      updated: null,
      updatedName: '',
      updatedAge: 0,
      updatedEmail: ''
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

  deleteFriend = event => {
    this.props.deleteFriend(event.target.id);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  storeUpdate = event => {
    let id = event.target.id;
    axios.get(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      this.setState({
        updated: id,
        updatedName: res.data.name,
        updatedAge: res.data.age,
        updatedEmail: res.data.email
      })
    })
    .catch (err => {
      console.log(err);
    })
  }

  cancelUpdate = () => {
    this.setState({
      updated: null
    })
  }

  updateFriend = event => {
    event.preventDefault();
    let updatedFriend = {
      name: this.state.updatedName,
      age: this.state.updatedAge,
      email: this.state.updatedEmail,
      id: this.state.updated
    }
    this.props.updateFriend(updatedFriend);
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} deleteFriend={this.deleteFriend} storeUpdate={this.storeUpdate} />
        <FriendForm handleSubmit={this.addFriend} handleChange={this.handleChange} />
        {this.state.updated !== null 
          ? <FriendUpdate updatedName={this.state.updatedName} updatedAge={this.state.updatedAge} updatedEmail={this.state.updatedEmail} handleChange={this.handleChange} cancelUpdate={this.cancelUpdate} handleSubmit={this.updateFriend} /> 
        : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
  }
}

export default connect(mapStateToProps, actions)(App);
