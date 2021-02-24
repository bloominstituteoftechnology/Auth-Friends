import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsListID extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        this.getDataID();
    }

    getDataID = () => {
        axiosWithAuth()
        .get(`/api/friends/${this.state.friends.id}`)
        .then((res) => [
            this.setState({
                FriendsID: res.data.friends
                .filter((friend) => {
                    return (
                        friend.id === this.state.friends.id
                    )
                })
            })
        ])
    }

    formatById = () => {
        const formattedId = [];
        this.state.friends.forEach((friend) => {
            if (this.state.friends.id === friend.id) {
                formattedId.push({
                    ...this.state.friends, 
                       name: friend.name,
                       age: friend.age,
                       email: friend.email,
                    });
        }
        console.log(formattedId);
        return formattedId;
    })
}

    render() {
        return (
            <div>
            <p>{this.state.friends.name}</p>
        </div>
        )
    }
    
}

export default FriendsListID;