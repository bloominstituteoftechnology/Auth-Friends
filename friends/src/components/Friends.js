import React from 'react';

const Friends = props => {
    return(
        <div>
            <p><strong>Name: </strong>{props.name}</p>
            <p><strong>Age: </strong>{props.age}</p>
            <p><strong>Email: </strong>{props.email}</p>
        </div>
    )
}

export default Friends;