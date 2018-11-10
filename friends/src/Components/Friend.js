import React from 'react';
import {Link} from 'react-router-dom';
import './Friend.css'; 

 const Friend = (props) => {
    return(
      <div className="friend">
      <Link to = {`/friend/${props.friend.id}`}>
          <h1>{props.friend.name}</h1>
          <p>{props.friend.age}</p>
          <p>{props.friend.email}</p>
      </Link>
      </div> 
    )
 }
 export default Friend;