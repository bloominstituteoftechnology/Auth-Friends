import React from 'react';
import { axiosWithAuth } from "../axiosWithAuth";

import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res);
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    addFriend = friend => {
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', JSON.parse(JSON.stringify(friend)))
            .then(res => {
                this.getData();
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return(
            <div>
                <NewFriendForm addFriend={this.addFriend} />
                {this.state.friends.map(friend => {
                    return <Friend key={friend.id} data={friend}/>
                })}
            </div>
        );
    }
}

export default FriendsList;