import React, { Component } from 'react';
// Fixed Imports to reflect new File structure 
import './App.css';
import Friends from './Components/Friends';
import Friendform from './Components/Friendform';
import { getFriends } from './Actions';
import { connect } from 'react-redux';

// Fix bugs in rendering
// Format to default React boilerplate
// Add form/friends and props calls

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux Friends</h1>
        </header>
        <Friendform />
        <div className="List">
          {this.props.friendsFetched ? (
            this.props.friends.map((friend, index) => {
              return <Friends key={index} index={index} friend={friend} />;
            })
          ) : (
            <img className="App-logo" alt="logo" />
          )}
        </div>
      </div>
    );
  }
}
// mappedState to newly restructured code
const mapStateToProps = state => {
  return {
    friends: state.friends,
    friendsFetched: state.friendsFetched,
  };
};

// connect works with previous commits leave as is
export default connect(mapStateToProps, { getFriends })(App);
