import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

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
            console.log("Successfully got friends",res);
            this.setState({ friends: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>    
                <h3>~ Friends List ~</h3>
                {this.state.friends.map(friend => 
                    <div key={friend.id}>
                        {`${friend.name}, ${friend.age} years old`}
                    </div>)
                }
            </div>
        )
    }

}


export default FriendsList