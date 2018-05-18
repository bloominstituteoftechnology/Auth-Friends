import React from "react";
import Friend from "./Friend.js";

const FriendList = props => {
    return (
        <div className="friend-list">
            {props.friends.map(friend => {
                return (
                <div className="friend-container" key={friend.id}><Friend friend={friend}/></div>
                );
            })}
        </div>
    );
}

export default FriendList;