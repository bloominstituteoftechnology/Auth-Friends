import React, {useState, useEffect} from 'react'
import Friend from './Friend'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function FriendList() {
    const [friends, setFriends] = useState([])

   const getFriends =()=> {
    // const token = JSON.parse(localStorage.getItem("token"));   
    
    axiosWithAuth()
        .get('/friends')
        .then((resp)=>{
            console.log("FriendList .then", resp.data)
            setFriends(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getFriends()
    }, []);

    return (
        <div>
            <h1>HERE ARE MY FRIENDS:</h1>
            <div>
                {
                    friends.map((friend)=>{
                        return <Friend friend={friend} key={friend.id}/>
                    })
                }
                
            </div>
        </div>
    )
}

