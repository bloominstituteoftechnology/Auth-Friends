import React from 'react';

const Friend = props => {
    return(
        <>
            <h2>Name: {props.data.name}</h2>
            <p class = "age">Age: {props.data.age}</p>
            <p class = "email">E-Mail: {props.data.email}</p>
        </>
    );
}

export default Friend;  