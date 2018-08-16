import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getFriends } from '../actions/actions';

import '../App.css';
import AddForm from './AddForm';


class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
      <div className="friends-list">
      
        {this.props.fetchingFriends ? (
          <h1>Getting friends at the moment.....</h1>
        ) : null }

          
            {this.props.friendsFetched ? (
              this.props.friends.map(friend => 
                <div key={friend.id}>{friend.name}</div>)
            ): null }         
        </div>
        <AddForm addFriend={this.props.addFriend}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched
  }
}


export default connect (mapStateToProps, {getFriends})( App);
