import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './friendsActions';
import Friends from './Friends';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Friend</h1>
        </header>
        <div className="App-intro">
          {this.props.friends.map(friend => {
            return <Friends key={friend} friend={friend} />;
          })}
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : null}
          {this.props.error !== null ? <div>{this.props.error}</div> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
