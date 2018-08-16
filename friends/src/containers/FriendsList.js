import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchFriends} from '../actions'

class FriendsList extends Component {
    componentDidMount(){
        this.props.fetchFriends();
    }
    render(){
        return (
            <div>
                {this.props.saved ? (
                    <ul>
                        {this.props.newFriends.map(friend => {
                            return <li key={friend.id}>{friend.name}</li>;
                        })}
                    </ul>
                ) : (
                    <ul>
                        {this.props.friends.map(friend => {
                            return <li key={friend.id}>{friend.name}</li>;
                        })}
                    </ul>
                )}
                
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        friends: state.friendsReducer.friends,
        newFriends: state.addFriendReducer.friends,
        saved: state.addFriendReducer.friendsSaved
    }
}

export default connect(mapStatetoProps,{fetchFriends})(FriendsList)