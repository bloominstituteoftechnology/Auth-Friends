import React, { Component } from 'react';

// import { getFriends, addNewFriend } from './actions/index'
import './App.css';
import FriendListView from './views/FriendListView';
import AddNewFriendForm from './components/AddNewFriendForm';

class App extends Component {

  // newFriend = () => {
  //   addNewFriend();
  // }
 

  render() {
    console.log(this.props)
    return (
      <div className="App">

        <FriendListView friends={this.props.friends}/>
        <AddNewFriendForm />
      </div>
    );
  }
}

export default App;
