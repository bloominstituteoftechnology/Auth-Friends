import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddFriend from '../components/AddFriend';

class FriendsList extends React.Component{
    state= {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            this.setState({
                friendsArr: res.data.map(friend => (
                    <div key={friend.id}>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))})
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                {this.state.friendsArr}
                <AddFriend/>
            </div>
        )
    }
}
export default FriendsList;