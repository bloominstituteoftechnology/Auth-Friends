import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import { fetchFriends, addFriend, deleteFriend, updateFriend } from './actions'


class App extends Component {
  state = {
    editFriend: {}
  }

  componentDidMount(){
    this.props.fetchFriends();
  }

  startUpdate = (obj) =>{ 
    this.setState({
      editFriend: obj
   })
}
updateToList = (obj) => {
  this.props.updateFriend(obj);
  this.setState({
    editFriend: {}
 })
}

  render() {
    
    return (
      <div className="App">
      <CreateFriendForm 
        {...this.props} 
        editFriend={this.state.editFriend} updateToList={this.updateToList} />
      <h2>Friends:</h2>
       <Friends 
        friends={this.props.friends} 
        deleteFriend={this.props.deleteFriend} 
        startUpdate={this.startUpdate} />
      </div>
    );
  }
}

function mapStateToProps({ friendsList }){
  return {
    friends: friendsList.friends,
    isFetching: friendsList.fetchingFriends
  }
}

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend,
    deleteFriend,
    updateFriend
  }
)(App);
