import React from 'react'

const Friend = props => {
    return (
        <div className="friend-card">
            <h3>{props.friend.name}, {props.friend.age}</h3>
            <h6>email: {props.friend.email}</h6>
        </div>
    )
}
export default Friend