import React, { Component } from "react";
import axiosWithAuth  from '../utils/axiosWithAuth'

class FriendList extends Component {
  state = {
    friends: []
  }
  componentDidMount(){
    this.getFriends()
  }
  
  getFriends = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res=>{         
      this.setState({
        friends:res.data 
      })
      console.log(res)      
    })
    .catch(err=>{
      console.log('this is an error',err)
    })

  };

  render() {
    const friends = this.state.friends.map((friend) => (
      <div key={friend.id}>
        <h1>{friend.name}</h1>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </div>
    ));
    return <div>{friends}</div>;
  }
}

export default FriendList;