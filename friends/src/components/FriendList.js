import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        friends: []
    }
    
    componentDidMount() {
        this.getFriendData();
    }

    getFriendData = () => {
        const token = JSON.parse(localStorage.getItem("token"))
            axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                console.log(res.data)
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => {
                console.log({err})
            })
    }
    render(){
    return(
        <div>
            <h2>These are my friends:</h2>
            <div>
            {/* {friends.map(friend => (
                // <p>{friend}</p>
                // <p>{friend}</p>
            ))} */}
            </div>

        </div>
    )
}
}

export default FriendList;