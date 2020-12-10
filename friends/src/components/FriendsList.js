import React, {useState} from "react"
import {axiosWithAuth} from "../components/utils/axiosWithAuth"
import AddFriends from "./AddFriends"


function FriendsList(){
    const [friends, setFriends]= useState([])

    const getFriends = e =>{
        e.preventDefault()
        axiosWithAuth()
        .get(`/api/friends/`)
        .then(res => setFriends(res.data))
        .catch(err => err.res, "Error in getFriends")
    }

    return(
      <div>
        <h2>Add friend form</h2>
        <button onClick={getFriends}>Click to see Friends</button>
        <AddFriends />
          {friends.map(friend =>{
            <div key={friend.id}>
                <h2>Name: {friend.age}</h2>
                <p>Age:{friend.age}</p>
                <p>Email:{friend.email}</p>
            
            </div>
          })}

      </div>


    )


}

export default FriendsList