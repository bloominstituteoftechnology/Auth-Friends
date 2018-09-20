import React, { Fragment } from 'react';

const Friends = props => {
   return (
       <Fragment>
       {props.friends.map(friend => {
        return (
        
        <div className={"friend "+friend.id}>
        <h1>{friend.name}</h1>
        <p>{friend.age} Years Old</p>
        <p>{friend.email}</p>
        </div>
        
    )})}
       </ Fragment>
   )
}

export default Friends;