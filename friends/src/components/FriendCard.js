import React from 'react'



const FriendCard = (props) => {
    // console.log(props.friend)
    return(
        <div>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>    
    )
}

export default FriendCard;