import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
//import {friendsReducer} from '../reducers/friendsReducer' don't think i need this. 
import {getFriends, postFriends, updateFriends, deleteFriends} from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state); 
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    postingFriends:  state.friendsReducer.postingFriends,
    updatingFriends: state.friendsReducer.updatingFriends,
    deletingFriends: state.friendsReducer.deletingFriends,
    error: state.friendsReducer.error,
    friends: state.friendsReducer.friends,
  }
}

export default connect(mapStateToProps, {getFriends, postFriends, updateFriends, deleteFriends})(App)
