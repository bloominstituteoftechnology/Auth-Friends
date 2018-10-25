import React from "react";

const FriendCard = props => {
    return (
        <section>
            <h2>{props.friend.name}</h2>
            <p><strong>Age:</strong> {props.friend.age}</p>
            <p><strong>Email:</strong> {props.friend.email}</p>
        </section>
    );
}

export default FriendCard;