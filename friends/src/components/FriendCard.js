import React from "react";

const FriendCard = ({ name , age , email , id, deleteFriend }) =>{

    return(
        <div className="friend">
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
            <button onClick={()=>{deleteFriend(id)}}>Delete Friend</button>
        </div>
    )
}

export default FriendCard;