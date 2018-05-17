import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './friendForm';
export const URL = `http://localhost:5000/api/friends`;


class Friends extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: [],
        }
    }
    componentDidMount(){
        axios
        .get(URL)
            .then(response => {
                const friends = response.data;
                this.setState({friends});
    })
}
    render() {
        const friends = this.state.friends.map(friend => (
            <div key = {friend.id}>
                <h3>Name: {friend.name}</h3>
                <p>{friend.age} years old</p>
                <p>Email:{friend.email}</p>
            </div>
        ));
        return(
          <div>
            <h1>Friends</h1>
            <FriendForm friends = {this.state.friends} />
            <p>{friends}</p>
        </div>
        )
            
        
    }
}
export default Friends;