import React from "react";

import FriendCard from "./FriendCard";

const FriendsDisplay = props => {
    return (
        <div className="friends-display-container">
            {props.friends.map(friend => {
                return <FriendCard key={friend.name} friend={friend} />;
            })}
        </div>
    );
}

export default FriendsDisplay;