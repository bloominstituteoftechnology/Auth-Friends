import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendCard from './FriendCard';

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
    <div>
      <div  style={{"margin" : "10px"}}>
        Friends List 
        {friendsData.map(friend => {
          return(
            <FriendCard
              key={friend.id}
              name={friend.name}
              email={friend.email}
              age={friend.age}
            /> 
          ) 
        })}
      </div>
    </div>
    )

}

export default FriendsList;
