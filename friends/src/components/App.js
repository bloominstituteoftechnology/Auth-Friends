import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { gettingFriend } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.gettingFriend();
  }

  render() {
    console.log('this props in app js: ', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.props.fetching ? (<div>Loading...</div>
           ):( 
             <div>
               {this.props.friends.map(item => {
                return <p key={item.id}>{item.name}</p>}
               )}
              </div>
              )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('what is our state? ', state)
  const { friendsReducer } = state
  console.log('what is our state after reasigning? ', state)
  return {
    friends: friendsReducer.friends,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, {gettingFriend})(App);
