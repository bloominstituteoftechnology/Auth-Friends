import React from "react"
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth"
class FriendsList extends React.Component{
    constructor(){
        super();
        this.state = { friends: []}
    }
    componentDidMount() {
        this.getFriendsList();
    }
    getFriendsList = () => {
        const token = window.localStorage.getItem('token')
        axiosWithAuth().get("/api/friends")
        .then(res => {
            console.log(res);
            this.setState({ friends: res.data})
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                Friends List:
        {this.state.friends.map(friend => <div>{`${friend.name}, ${friend.age} years old`}</div>)}
            </div>
        )
    }
}



export default FriendsList