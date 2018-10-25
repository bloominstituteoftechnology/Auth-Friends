import React from "react";

import Friend from "./Friend";

const FriendList = props => {
    return (
        <div>
        <ul>
            <li>{props.friends.map(friend => {return (<p>{friend.name}</p>)})}</li>
        </ul>
        </div>
    );
};

export default FriendList;
