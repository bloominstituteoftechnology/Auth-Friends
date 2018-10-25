import React from "react";

const Friends = props => {
  return (
    <div>
        {props.friends.map(friend => {
            return (
                <p>{friend.name}</p>
            );
        }

        )}
    </div>
  );
};

export default Friends;