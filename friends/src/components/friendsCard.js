import React from 'react'


export default function FriendsCard ({friend}){

    return(
        <div className='Friend-Cards' key={friend.id}>
                <h3>Friends Name:{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email} </p>
        </div>
    )
}