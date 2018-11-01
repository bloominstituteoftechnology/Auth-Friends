import React from "react";
import FriendCard from "./FriendCard";

const Friends = props => {
    return (  
        <div>
            {props.friends.map(friend => {
                return <FriendCard key={friend.name} friend={friend} />
            })}
        </div>

    );
}
 
export default Friends
