import React from "react";

const FriendCard = ({name,age,email}) =>{

    return(
        <div className="friend">
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

export default FriendCard;