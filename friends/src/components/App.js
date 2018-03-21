import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { initFriends } from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.initFriends();
  }



  render() {
    return (
      <div className="App">
        {this.props.friending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ):(
          <div>
            {this.props.friends.map(friend => {
              return( 
              <div key={friend.id}>
                <ul>
                  <li>{friend.id}</li>
                  <li>{friend.name}</li>
                  <li>{friend.age}</li>
                  <li>{friend.email}</li>
                </ul>
              </div> 
              )
            })}
            </div>  
        )}
        <div>
          <form>
            <input></input>
          
          </form>
          </div>
      </div>

     
    );
  }
}

const mapStateToProps = state => {
  return {
    friending: state.friending,
    friends: state.friends,
    error: state.errorMessage,
  };
};

export default connect(mapStateToProps, { initFriends })(App);
