import React from 'react';
import axios from 'axios';
import Friend from './Friend';

class FriendsList extends React.Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axios.get('http://localhost:5000/api/friends', {headers: {authorization: window.localStorage.getItem('token')}})
            .then(response => {
                this.state.friends = response.data;
                console.log(this.state);
            })
            .catch(error => console.log(error));
    };

    render() {
        return (

            <div className='friends-list-container'>
                <p>Here are some friends:</p>
                {this.state.friends.forEach(friend => {
                    return <Friend friend={friend} />
                })}
            </div>

        )
    
    };

};

export default FriendsList;