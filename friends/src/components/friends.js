import React from "react"

import {axiosWithAuth} from "../utils/axiosWithAuth"

class FriendsList extends React.Component{
    state = { friends: []}
    
    componentDidMount() {
        this.getFriendsList();
    }
    getFriendsList = () => {
        const token = JSON.parse(localStorage.getItem('token'))
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
                 Friends Info:
                 <div className='list'>
        {this.state.friends.map(friend => <div className='friends-list'>
            Name: {`${friend.name}, 
            Email: ${friend.email}, 
            Age: ${friend.age} years old`}
            </div>)}
            </div>
            </div>
        )
            
  
    }
}



export default FriendsList;