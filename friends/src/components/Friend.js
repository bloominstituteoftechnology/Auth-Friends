import React from 'react'


const Friend = props => {
    const {friend} = props

    return (
        <div key={friend.id} className="friend-card">
            {/* <p className="close-button" onClick={clickHandler}>X</p> */}
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}


export default Friend