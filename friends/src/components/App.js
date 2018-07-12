import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchData, saveData} from '../actions';


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


  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Rest Assured...something is here</h1>
        <div>{this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ):( <ul>{this.props.friends.map(friend => {
          return<li key={friend.id}>{friend.name}<br/>{friend.age}<br/>{friend.email}</li>
        })}</ul>)
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
    test: state
  }
}

export default connect(mapStateToProps, {fetchData, saveData})(App);
