import React from 'react';

const Friends = (props) => {
    // console.log("FRIEND PROPS", props);
    return (
        <div>
            {props.friendsList.map(friend => {
                <h3> HELLO WORLD </h3>
                // <div>
                //     {friend.name}
                // </div>,
                // <div>
                //     {friend.age}
                // </div>,
                // <div>
                //     {friend.email}
                // </div>
            })}
        </div>
    );
}

export default Friends;