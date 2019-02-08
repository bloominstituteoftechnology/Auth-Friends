import React from 'react'

const Friend = props => {
    return (
        <div>{props.friend.name} {props.friend.age} {props.friend.email}</div>
    )
}

export default Friend
