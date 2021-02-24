import React from 'react'


export default function Friend(props) {
    const {friend} = props
    return (
        <div>
            <h4>Name:{friend.name}</h4>
            <p>Age:{friend.age}</p>
            <p>Email:{friend.email}</p>
        </div>
    )
}
