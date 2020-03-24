import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component{
    constructor(){
        super();
        this.state = { friends: []}
    }
    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth().get("/api/friends")
        .then(response => {
            console.log(response);
            this.setState({ friends: response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                Friends:
        {this.state.friends.map(friend => <div>{`${friend.name}, is ${friend.age} years old`}</div>)}
            </div>
        )
    }
}



export default Friends;