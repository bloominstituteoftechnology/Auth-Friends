import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
    state = {
        friends: []
    }
    render() {
        return (
            <div>
                {this.state.friends.map((friend, index) => {
                return (
                    <ul key={index}>
                        <li>{friend.name}</li>
                        <li>{friend.age}</li>
                        <li>{friend.email}</li>
                    </ul>
                )}
                )}
            </div>
        )
    }
    componentDidMount() {
        this.loadFriends();
    }
    loadFriends = () => { 
        axios 
          .get('http://localhost:5000/api/friends/get') 
          .then(response => { 
            this.setState({ 
            friends: response.data, 
            }); 
          }) 
          .catch(() => { 
            console.error('error getting data'); 
          }); 
      }; 
}

export default Friends;