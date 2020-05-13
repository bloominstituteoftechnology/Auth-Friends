import React from 'react'


const FriendsCard = (props) => {
//simply the card that displays the friend data. data were accessing here
//is passed to props from Friends.js
    return (
        <div>
                    <div>
                        <h2>{props.friend.name}</h2>
                        <p>Age: {props.friend.age}</p>
                        <p>Email: {props.friend.email}</p>
                    </div>
        </div>
    )
}

export default FriendsCard