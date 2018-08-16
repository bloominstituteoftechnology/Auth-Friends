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
                <ul>
                    {this.props.friends.map(friend => {
                        return <li key={friend.id}>{friend.name}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStatetoProps,{fetchFriends})(FriendsList)