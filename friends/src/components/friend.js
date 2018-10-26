import React from 'react'
import './friend.css'

const Friends = (props) => {
    return (
        <div className="flex-children">
            <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Email: {props.email}</h4>
            <button onClick={()=> props.deleteFriend(console.log("inside delete func"))}>Delete</button>
        </div>
    )
}

export default Friends;