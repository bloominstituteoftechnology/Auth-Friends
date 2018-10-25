import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFriends, addFriend } from './actions'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <div className="App">
      {this.props.friends.map(friends => {
        return(
          <div key={friends.id}>{friends.name}, {friends.age}, email: {friends.email}</div>)
      })}

      <div className='form'>
        <input 
        type='text'
        onChange={this.handleInput}
        placeholder='name'
        name='name'
        />
        <input 
        type='number'
        onChange={this.handleInput}
        placeholder='age'
        name='age'
        />
        <input 
        type='text'
        onChange={this.handleInput}
        placeholder='email'
        name='email'
        />
        <button onClick={this.props.addFriend(this.props.friends.id)}>Save</button>
        <p>Note all fields are needed!</p>
    </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
  }
}

export default connect(
  mapStateToProps, {
    fetchFriends, addFriend
  }
)(App)



