import React, { Component } from 'react';
import './App.css';
import { fetchFriends, createFriend, deleteFriend } from './actions';
import { connect } from 'react-redux';


class App extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
      <h1>Your Friends!</h1>
      <div className="mainForm">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input"
          value={this.state.name}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="number"
          placeholder=" Age"
          name="age"
          className="input"
          value={this.state.age}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="input"
          value={this.state.email}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        
        <button className="button"
          onClick={() => {
            this.props.createFriend({ name: this.state.name, age: this.state.age, email: this.state.email });
            this.setState({ name: '', age: '', email: '' });
          }}
        >
        Add Friend
        </button>
        </div>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        
        <ul className="mainList">
          {this.props.friends.map(friend => <li key={friend.id} className="friendList">
                                              <div className="container">
                                              <div className="friendName"><h2>{friend.name}</h2></div>
                                              <div className="friendInfo">
                                                <div className="age">{friend.age}</div>
                                                <div className="email">{friend.email}</div>
                                                <button className="button" 
                                                  onClick={() => {
                                                    this.props.deleteFriend(friend.id);}}>Destroy</button>
                                              </div>
                                              </div>
                                            </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, { fetchFriends, createFriend, deleteFriend })(App);