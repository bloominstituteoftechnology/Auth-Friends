import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';

import FriendsList from './components/FriendsList';
import CreateFriendView from './views/CreateFormView';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if(this.props.savingFriend){
      return <h3 className='APP'>Saving Friend ...</h3>
    }
    if(this.props.fetching){
      return <h3 className='App'>Loading Friends List ...</h3>
    }
    return (
      <div className="App">
        <CreateFriendView />
        <FriendsList friends={this.props.friends}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
      friends: state.friendsReducer.friends,
      fetching: state.friendsReducer.fetchingFriends,
      savingFriend: state.friendsReducer.savingFriends,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchFriends,
  }
) (App);
