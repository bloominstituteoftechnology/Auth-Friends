import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./Friends.css";
import Loader from "react-loader-spinner";

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriends = () => {
            axiosWithAuth()
              .get('/friends')
              .then(res=> {
                setFriends(res.data)
              })
              .catch(err=>{
                console.log(err);
              })
        };
        getFriends();
    }, []);
    
    return (
        <div className="friends">
            <h1>Friends!</h1>
            <Loader type="ThreeDots" color="skyblue" height={80} width={80} timeout={1000}/>
            {friends.map((friend) => (
                <div key={friend.id} className='friends-list'>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <h5>{friend.email}</h5>
                </div>
            ))}
        </div>
    )
}

export default Friends
