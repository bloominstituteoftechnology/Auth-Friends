import React from 'react';


const Friend = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <p data={props} ></p>
        </div>
    )
}

export default Friend;