import React from "react";

function FriendList (props) {
    return (
        <div>
        {[].map(( friend, index) => (
            <h2 key={index}>{friend.person}</h2>
        ))}
        <h3>FriendList</h3>
        </div>
    );
}

export default FriendList;