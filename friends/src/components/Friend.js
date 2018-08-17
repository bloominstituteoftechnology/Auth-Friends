import React from 'react';

export default function Friend (props) {
    return(
        <div>
            <div>
                {props.friend.id}
            </div>
            <div>
                {props.friend.name}
            </div>
            <div>
                {props.friend.age}
            </div>
            <div>
                {props.friend.email}
            </div>
        </div>
    );
}
