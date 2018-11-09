import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    return(
        <Link to = {`/friend/${props.friend.id}`}>
            <FriendLayout>
                <FriendImage src={panda} alt='panda'/>
                <h1>{props.friend.name}</h1>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
                <button>Update Friend</button>
                <button>Unfriend</button>
            </FriendLayout>
        </Link>
    )
}
 export default Friend;