import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteFriend, updateFriend } from '../actions';

import FriendButtons from './FriendButtons';


class FriendsList extends Component {




    render() {
        
        return(    
            <div className='container' >
              {this.props.friends.map(friend => {
                return (
                  <div className='friendCard'>
                    <div className='w100'>{friend.name}</div>
                    <div className='w100'>{friend.age}</div>
                    <div className='w100'>{friend.email}</div>
                    <br/>
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
