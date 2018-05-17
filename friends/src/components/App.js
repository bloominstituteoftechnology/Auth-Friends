import React, { Component } from 'react';
import logo from '../logo.svg'
import '../styles/App.css'
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'
import AddFriend from '../components/AddFriend'

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {this.props.friends.map(friend => {
            return (
              <p key={friend.id}> {friend.name} </p>
            )
          })}
        <AddFriend />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}
export default connect(mapStateToProps, { fetchFriends })(App)
