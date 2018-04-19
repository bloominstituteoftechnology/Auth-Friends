import React from 'react';

const Friends = (props) => {
    // console.log("FRIEND PROPS", props);
    return (
        <div>
            {props.friendsList.map(friend => {
                return([
                <div>
                    {friend.name}
                </div>,
                <div>
                    {friend.age}
                </div>,
                <div>
                    {friend.email}
                </div>
                ])
            })}
        </div>
    );
}

export default Friends;