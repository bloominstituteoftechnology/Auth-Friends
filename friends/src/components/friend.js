import React from 'react'
import './friend.css'

const Friends = (props) => {
    return (
        <div className="flex-children">
            <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Email: {props.email}</h4>
        </div>
    )
}

export default Friends;