import React from "react";

import Friend from "./Friend";

const FriendList = props => {
    return (
        <div>
            {props.friends.map(friend => {return (<Friend friend={friend}>{friend.name}</Friend>)})}
        </div>
    );
};

export default FriendList;
