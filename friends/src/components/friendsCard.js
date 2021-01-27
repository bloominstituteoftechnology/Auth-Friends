import React from 'react'

 function FriendsCard ({friend}){

    return(
        <div key={friend.id}>
                <h3>Friend:{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email} </p>
        </div>
    )
}

export default FriendsCard;