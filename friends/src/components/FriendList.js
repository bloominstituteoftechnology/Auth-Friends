import React from "react";

import Friend from "./Friend";

const FriendList = props => {
    return (
        <div>
        <ul>
            <li>{props.friends.map(friend => {return (<Friend friend={friend}>{friend.name}</Friend>)})}</li>
        </ul>
        </div>
    );
};

export default FriendList;
