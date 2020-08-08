import React from 'react';


const FriendsCard = props => {

    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h3>{props.email}</h3>
            <button className='btn'>Delete Friend</button>
        </div>
    )
}

export default FriendsCard;