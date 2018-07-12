import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchData, saveData, updateData, deleteData} from '../actions';
import FriendsList from './FriendsList'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      age:'',
      email:''
    }
  }
  componentDidMount() {
    this.props.fetchData();
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newFriend = {name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.saveData(newFriend);
  }

  handleUpdate = (name, age, email, id) => {
    const newEdits = {};
    if (name.length > 0) newEdits.name = name;
    if (age.length > 0) newEdits.age = age;
    if (email.length > 0) newEdits.email = email;
    this.props.updateData(id, newEdits);
  }

  handleDelete = (id) => {
    this.props.deleteData(id);
  }


  render() {
    return (
      <div className="App">
        <h1>Rest Assured...something is here</h1>
        <div>{this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ): <FriendsList friends={this.props.friends} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
      }</div>
      <div className="add-friend">
        <form className="af-form" onSubmit={this.handleSubmit}>
          Name: <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange} className="af-input" />
          <br/>
          Age: <input
          type="number"
          placeholder="Age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange} className="af-input" />
          <br/>
          Email: <input
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange} className="af-input" />
          <button type="submit" className="addFriend-button">Add Friend</button>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetchingFriends,
    saving: state.friendsReducer.savingFriends,
    updating: state.friendsReducer.updatingFriend,
    deleting: state.friendsReducer.deletingFriend,
    test: state
  }
}

export default connect(mapStateToProps, {fetchData, saveData, updateData, deleteData})(App);
