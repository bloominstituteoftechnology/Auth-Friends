import React from 'react';

 const FriendsList = (props) => {
    return (
        <div className="friend">
            <h4> Friend Name: {props.friend.name}</h4>
            <h4> Friend Age: {props.friend.age}</h4>
            <h4> Friend Email: {props.friend.email}</h4>
        </div>
    )

}
export default FriendsList;