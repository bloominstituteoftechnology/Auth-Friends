import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend'
import NewFriend from './NewFriend'

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err.response));
    }

    updateFriends = friendsArray => {
        this.setState({ friends: friendsArray});
    }

    render() {
        return(
            <div className="friends-list">
                <h2>My Friends:</h2>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} updateFriends={this.updateFriends} />
                ))}
                <NewFriend updateFriends={this.updateFriends} />
            </div>
        )
    }

    

}

export default FriendsList