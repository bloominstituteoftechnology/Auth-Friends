import React from 'react';


const Friend = (props) =>{
    return (
        <div>
            <p>Name:{props.friend.name}</p>
            <p>Id : {props.friend.id}</p>
            <p>Age: {props.friend.age}</p>
            <p>email: {props.friend.email}</p>
        </div>
    )
};

export default Friend;