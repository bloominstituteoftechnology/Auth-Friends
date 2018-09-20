import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <span><strong>Name:</strong> {props.name}</span><br />
            <span><strong>Age:</strong> {props.age}</span><br />
            <span><strong>Email:</strong> {props.email}</span><br />
            <br/>
        </div>
    )
}

export default Friend;