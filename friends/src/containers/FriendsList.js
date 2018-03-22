import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteFriend, updateFriend } from '../actions';

import FriendButtons from './FriendButtons';


class FriendsList extends Component {




    render() {
        
        return(    
            <div>
              {this.props.friends.map(friend => {
                return (
                  <div>
                    <div>{friend.name}</div>
                    <div>{friend.age}</div>
                    <div>{friend.email}</div>
                    <FriendButtons friend={friend}/>
                    <br/><br/>
                  </div>
                )
              })}
              
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    friends: state.friends
    }
}

export default connect(mapStateToProps, { deleteFriend, updateFriend })(FriendsList);
