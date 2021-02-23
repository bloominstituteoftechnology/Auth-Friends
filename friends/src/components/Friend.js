import React from 'react'

function Friend(props) {
    const { friend } = props

    return (
        <div >
            <div>
               <p>{friend.name}</p> 
               <p>{friend.age}</p>
               <p>{friend.email}</p>
            </div>
        </div>
    )
}

export default Friend
