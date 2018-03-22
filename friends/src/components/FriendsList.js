import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
import { get_friends, delete_friend } from '../actions';

import UpdateFriend from './UpdateFriend';

import {Card, Button } from 'reactstrap';
import './FriendsList.css';

class FriendsList extends Component {
    componentDidMount() {
      this.props.get_friends();
    }
  
    render() {
      return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {/* FriendsList */}
          {this.props.fetchFriends ? (
            <p>Fetching...</p>
          ) : (
            <React.Fragment>
              {this.props.friends.map(friend => {
                return <Card className='card' key={`${friend.name} ${friend.id}`}>
                  <h3>{friend.name}</h3>
                  <p>age: {friend.age}</p>
                  <p>email: {friend.email}</p>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <UpdateFriend buttonLabel='Update Friend'/>
                    <Button color='danger' onClick={() => this.props.delete_friend(friend.id)}> Delete Friend</Button>
                  </div>
                </Card>
              })}
            </React.Fragment>
          )}
        </div>
      );
    }
  
  } // end of App class

  const mapStateToProps = state => {
    return {
      fetchFriends: state.fetchFriends,
      friends: state.friends,
    };
  };
  
  export default connect(mapStateToProps, { get_friends, delete_friend })(FriendsList);