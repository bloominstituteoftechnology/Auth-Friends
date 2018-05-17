import React, { Component } from 'react';
import logo from '../logo.svg'
import '../styles/App.css'
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'

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
        <p className="App-intro">
          {this.props.friends.map(friend => {
            return (
              <p> {friend.name} </p>
            )
          })}
        </p>
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
