import React from "react"


const FriendsCard =({friends})=>{
    return(
        <div className="friend-container">
            <h2> Name:{friends.name}</h2>
            <p> Age:{friends.age}</p>
            <p> Email address:{friends.email}</p>
        </div>
    )
}

export default FriendsCard;