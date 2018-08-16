import React, { Component } from 'react';
import './App.css';
import Friends from './Friends'; 
import FriendForm from './FriendForm'; 
import {getFriends} from '../Action '; 
import {connect} from 'react-redux'; 



class App extends Component {
  componentDidMount(){
    this.props.getFriends(); 
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>{`Keith's Friends`}</h1>
      <FriendForm />
      </header>
      {this.props.error ? <h3>Error Fetching Friends</h3> : null}
      <div>
        {this.props.gettingFriends ? (
          <h1>Loading</h1>
        ): (
          <Friends friends={this.props.friends} />
        )}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const{ friendsReducer } = state; 
  return {
    friends: friendsReducer.friends, 
    error: friendsReducer.error, 
    gettingFriends: friendsReducer.gettingFriends
  }
}

export default connect (mapStateToProps, {getFriends})(App); 

export default App;
