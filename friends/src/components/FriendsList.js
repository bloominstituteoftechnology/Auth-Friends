import React, {useEffect, useState} from 'react';
import axios from "axios";
import FriendBox from "./FriendBox";

function FriendsList() {

    const [friends, setFriends] = useState ([]);
    const [error, setError] = useState("");
    const [reload, setReload] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:5000//api/friends")
        .then(res => setFriends(res.data.friends))
        .catch(err => setError(err.Error))
    }, [reload])
    
    return (
        <div className="friends">
            {error
            ? <div className="error-box">{error}</div>
            : <div className="friends-content">
                  {friends.map(friend => {
                      <FriendBox key={friend.id} friend={friend} reload={reload}/>
                  })}
             </div> } 
        </div>
    )
}

export default FriendsList
