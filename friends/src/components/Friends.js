import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

class Friends extends React.Component{
    constructor(){
        super();
        this.state= {
            friends:[]
        }
    }
    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        const token = window.localStorage.getItem('token')
        axiosWithAuth()
        .get('api/friends')
        .then(res => {
            console.log(res);
            this.setState({ friends: res.data})
        })
        .catch(err=> console.log(err))
    }

    // deleteFriend = () => {
    //     axiosWithAuth()
    //     .delete(`api/friends/${this.state.friends.data.id}`)
    //     .then(res => {
    //         console.log(res);
    //         this.setState({ friends: res.data})
    //     })
    // }

    // <button onClick={this.deleteFriend}>Remove Friend</button>
    

    render(){
        return(
            <div>
                <h2>My Friends:</h2>
                <AddFriend getFriends={this.getFriends} />
                {this.state.friends.map(friend => (<div className='friends' key={friend.id}>
    My Friend <b>{friend.name}</b> is <b>{friend.age}</b> years old and can be reached at <b>{friend.email}</b>
</div>))}
            </div>
        )
    }
}

export default Friends;