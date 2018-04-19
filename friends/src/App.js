import React, { Component } from 'react';
import './App.css';
import { fetchFriends, createFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    friends: ""
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends List</h1>
        </header>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          type="text"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          type="text"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button 
          onClick={() => {
            this.props.createFriend({name: this.state.name, age: this.state.age, email: this.state.email});
            this.setState({name: '', age: '', email: ''});
          }}
        >
          Add Friend
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null }
        <ul>
          {this.props.friends.map(friend => <li className='friend' key={friend.id}>
          <h3>{friend.name}</h3>
          <div>
            <h4>{friend.age}</h4>
          </div>
          <div>
            <h4>{friend.email}</h4>
          </div>
          </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, {fetchFriends, createFriend})(App);
