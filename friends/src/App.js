import React, { Component } from 'react';
import './App.css';
import FriendListView from './views/FriendListView';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <FriendListView friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
