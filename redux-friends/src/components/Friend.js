import React from 'react';

const Friend = props => {
    console.log(props.friend);
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <h4>{props.friend.age}</h4>
            <h4>{props.friend.email}</h4>
            {/* <button onClick={() => {}}>Delete</button> */}
        </div>
    )
}

export default Friend