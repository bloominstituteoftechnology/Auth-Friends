import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetch_Friends} from './Actions';
import CreateFriend from './Components/createFriend'


class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetch_Friends()
  }
  render() {
    console.log("APPPP", this.props.friends)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        
        <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            <ul>
              {this.props.friends.map(friend => {
                return <li key={friend.name}>{friend.name}</li>;
              })}
            </ul>
            <CreateFriend/>
          </div>
        )}
      </div>
        
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    friends: state.friends
  }
}
export default connect(mapStateToProps, {
  /* actions go here */
  fetch_Friends
})(App);
