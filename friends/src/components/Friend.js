import React from 'react'

function Friend({friend}) {
    
    return (
        <div key={friend.id}>
            <h4>Name: {friend.name}</h4>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}

export default Friend;