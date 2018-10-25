import React from "react";

const Friends = props => {
  return (
    <div>
        {props.friends.map(friend => {
            return (
                <div>
                <p>{friend.name}</p>
                <button name={friend.id} onClick={props.removeFriend}>X</button>
                <button name={friend.id} onClick={props.updateFriend}>+</button>
                </div>
            );
        }

        )}
    </div>
  );
};

export default Friends;