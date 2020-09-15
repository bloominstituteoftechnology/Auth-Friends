import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [ friendsData, setFriendsData ] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res.data)
        setFriendsData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  useEffect (() => {
    getFriends();
  }, [])

  
    return (
    <div  style={{"margin" : "10px"}}>
      Friends List 
      {friendsData.map(friend => {
        return(
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.age}</p>
          </div>   
        ) 
      })}
    </div>
    )

}

export default FriendsList;
