import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import './App.css';

import { fetchFriends, addFriend, editFriend, deleteFriend } from './actions';
import FriendsList from './components/FriendsList';
import Form from './components/Form';

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  height: 149px;
  width: 100%;
  background-color: #FFF;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <HeaderDiv>
          <Form 
            history={this.props.history}
            location={this.props.location}
            addFriend={this.props.addFriend} 
            editFriend={this.props.editFriend} 
          />
        </HeaderDiv>
        <FriendsList 
          fetchingFriends={this.props.fetchingFriends} 
          friends={this.props.friends} 
          deleteFriend={this.props.deleteFriend}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFriends: () => dispatch(fetchFriends()),
    addFriend: newFriend => dispatch(addFriend(newFriend)),
    editFriend: (editedFriend, id) => dispatch(editFriend(editedFriend, id)),
    deleteFriend: id => dispatch(deleteFriend(id)),
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
