import React from 'react';

const Friend = (props) => {
    console.log(props);
    return (
        <div>
            <span>Name:{props.name}</span><br />
            <span>Age:{props.age}</span><br />
            <span>Email:{props.email}</span><br />
            <br/>
        </div>
    )
}

export default Friend;