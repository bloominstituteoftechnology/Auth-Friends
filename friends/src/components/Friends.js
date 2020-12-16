import React from 'react'

export default function FriendCard (props) {

const { friend } = props

    return(
        <div> 
            <p><strong>{friend.name}</strong>, {friend.age} </p>
            <p>For more weirdly personal info, contact them at {friend.email}.</p>
            <button id={friend.id} onClick={e => props.handleDelete(e)}>Delete!</button>
        </div>
    )
}