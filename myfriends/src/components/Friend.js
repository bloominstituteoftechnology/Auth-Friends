import React from 'react'

function Friend(props) {
    return (
        <div>
            <h1>Name: {props.friend.name}</h1>
            <h3>Age: {props.friend.age}</h3>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend
