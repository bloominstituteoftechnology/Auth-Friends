import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';

import FriendsList from './components/FriendsList';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if(this.props.fetching){
      return <h3 className='App'>Loading Friends List ...</h3>
    }
    return (
      <div className="App">
        <FriendsList friends={this.props.friends}/>
        {/* <CreateFriendForm /> */}
        {/* <UpdateFriendForm /> */}
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
      friends: state.friendsReducer.friends,
      fetching: state.friendsReducer.fetchingFriends,
  };
}


export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
) (App);
