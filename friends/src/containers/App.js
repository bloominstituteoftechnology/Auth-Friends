import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchData } from '../actions';

import FriendList from '../components/FriendList';
import AddForm from '../components/AddForm';

class App extends Component {

  componentDidMount() {
    
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>Friend List</h1>
        {
          this.props.fetchingFriends
            ? <img src={logo} />
            : <FriendList friends={this.props.friends} />
        }
        { 
          (this.props.savingFriends && !this.props.friendsSaved)
          ? <div>...Adding to Friend List</div>
          : <AddForm />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchData })(App);
