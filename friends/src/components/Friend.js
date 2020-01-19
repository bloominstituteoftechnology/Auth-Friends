import React from 'react';

const Friend = props => {
    return(
        <div>
            <h2>Name: {props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>email: {props.data.email}</p>
        </div>
    );
}

export default Friend;