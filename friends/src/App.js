import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchFriends } from './actions/index';
import { connect } from 'react-redux';
import Friend from './components/Friend';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.props.fetching ? (
            <p>LOADING FRIENDS . . .</p>
            ) : (
              <div>
                {this.props.friends.map(friend => {
                  return <Friend key={friend.id} friend={friend} />
                })}
              </div>
            )
          }
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    fetching: state.fetching,
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);
