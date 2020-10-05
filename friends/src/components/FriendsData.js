import React from "react"

const FriendsData = props =>{
    
    return(
        <div className="new-added-friends">
          <p> Name:&nbsp;{props.friend.name}</p>
          <p> Age:&nbsp;{props.friend.age}</p>
          <p> Email:&nbsp;{props.friend.email}</p>
         
        </div>
    )
}
export default FriendsData;