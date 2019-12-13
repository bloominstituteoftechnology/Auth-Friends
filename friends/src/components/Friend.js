import React from 'react';

const Friend = props => {
    return(
        <>
            <h2>Name: {props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>E-Mail: {props.data.email}</p>
        </>
    );
}

export default Friend;