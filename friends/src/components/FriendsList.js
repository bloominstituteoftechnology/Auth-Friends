import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = props => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const FetchFriends = () => {
            axiosWithAuth().get('/api/friends')
                .then(res => {
                    setFriends(res.data);
                })
                .catch(err => console.log(err))
        }
    }, [])
    
    return(
        <div>
            <h2> Friends List</h2>
            {friends.map(value =>
                <div>
                    Name: {value.name}
                    Age: {value.age}
                    Email: {value.email}
                </div>
            )}
        </div>
    )
}

export default FriendsList;