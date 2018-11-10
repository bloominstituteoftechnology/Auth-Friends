import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props =>{
    return (
        <div>
           <Link to={`/${props.friend.id}`}> <h1>{props.friend.name}</h1> </Link>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}
export default Friend;