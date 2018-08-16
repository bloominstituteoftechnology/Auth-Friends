import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchFriends from '../actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log('friends props in app render',this.props.friends);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {this.props.friends.map(friend => {
              return 
              <div key={friend.id}> 
              {friend.name}
              </div>;
            })}

         {this.props.fetching ? (
           <img src={logo} className = "App-logo" alt = "logo" />
         ) : null}
         {this.props.error !== null ? <div>{this.props.error}</div> : null}
         )}     

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('logging state in mapStateToProps', state)
  const {friendsReducer} = state;
  return {
    friends: friendsReducer.friends, //comes from state defined in friendsReducer
    fetchingFriends: friendsReducer.fetchingFriends,
    error: friendsReducer.error
  }
}


export default connect(mapStateToProps, {fetchFriends}) (App);
