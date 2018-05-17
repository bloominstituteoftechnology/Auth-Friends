import React from 'react';

const Card = (props) => {
    console.log("Card friend", props.friend)
    return (
        <div>
            {props.friend.name}
        </div>
    );
};

export default Card;