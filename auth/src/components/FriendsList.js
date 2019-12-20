import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from '../components/AddFriends';

class FriendsList extends React.Component{
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            this.setState({
                friendsArr: res.data.map(friends =>(
                    <div key={friends.id}>
                        <p>Name: {friends.name}</p>
                        <p>Age: {friends.age}</p>
                        <p>Email: {friends.email}</p>
                    </div>
                ))
            })
        }).catch(err => console.log(err))
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