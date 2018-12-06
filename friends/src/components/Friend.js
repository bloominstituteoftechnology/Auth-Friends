import React from 'react';

const Friend = props => {
    
    return (
    <div>
        <h4 >{props.friend.name}</h4>
        <p >age:  {props.friend.age}</p>
        <p >email:  {props.friend.email}</p>
    </div> 
    )
}

export default Friend;