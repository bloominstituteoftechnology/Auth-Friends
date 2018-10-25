import React from 'react'

const Friend = props => {
    const {age, email, name} = props.friend
    return (
        <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <button onClick={(event) => props.deleteFriend(event, props.friend.id)}>Delete Friend</button>
        </div>
    )
}

export default Friend