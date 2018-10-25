import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends'; 
import FriendForm from './components/FriendsForm'; 
import { fetchfriends } from './actions'; 
import { connect } from 'react-redux'; 



class App extends Component {
  componentDidMount(){
    this.props.fetchfriends(); 
  }

  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Friends</h1>
      <FriendForm />
      </header>
      <div>
        {this.props.isFetching ? (
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
    isFetching: friendsReducer.isFetching
  }
}

export default connect (mapStateToProps, {fetchfriends})(App); 
