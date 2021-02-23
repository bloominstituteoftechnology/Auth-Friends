import React, { useEffect, useState } from 'react';
import axios from 'axios';


 const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:4000/api/friends", {headers: {Authorization: token}})
        .then(res => {
            console.log('friendslist res', res.data)
            setFriends(res.data)
    })

        .catch(err => console.log(err))
    }

     return (
         <div>
             <h2>Friends List</h2>
            <div>
                {friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h3>{friend.name}</h3>
                            <h3>{friend.age}</h3>
                            <h3>{friend.email}</h3>
                        </div>
                    )
                })}
            </div>
         </div>
     )
 }

 export default FriendsList;