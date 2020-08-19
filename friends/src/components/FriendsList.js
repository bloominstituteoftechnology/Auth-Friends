import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import FriendForm from './FriendForm'; 


const FriendsList = () => {
// set state for a list of friends 
    const [friends, setFriends] = useState([]); 

// useEffect to get friends data on mounting 
useEffect(() => {
    axiosWithAuth()
    .get("/api/friends")
    .then((res) => {
        console.log(res.data);
        setFriends(res.data); 
    })
    .catch((err) => console.log(err.message))
}, [])


    return (
        <div>
            <div className="float-left" style={{ width: "40vw"}}>
                <h3 className="text-center">Join Central Perk</h3>
                <FriendForm /> 
            </div>
        <div className="d-flex flex-column">
            {friends.map(friend => {
                return (
                    <div className="card float-left" style={{ width: "18rem", margin: 15 }}>
                        <div className="card-body">
                            <div className="card-header">{friend.name}</div>
                            <footer className="blockquote-footer">{friend.email}</footer>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default FriendsList; 
