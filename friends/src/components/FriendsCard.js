import React from 'react';

const FriendsCard = props => {

    const { id, name, age, email } = this.props.friend;

    return (
        <div>
            Name: {name}
            Id: {id}
            Age: {age}
            Email: {email}
        </div>

    );
};

export default FriendsCard;