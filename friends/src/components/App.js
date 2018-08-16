import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
//import {friendsReducer} from '../reducers/friendsReducer' don't think i need this. 
import {getFriends, postFriends, updateFriends, deleteFriends} from '../actions';
import FriendsContainer from './FriendsContainer';

class App extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    const friends = this.props.friends; 
    console.log(friends); 
    return (
      <div className="App">
        <FriendsContainer friends={friends}/>
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
