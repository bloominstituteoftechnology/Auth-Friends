import React from 'react';

const Friend = props => {
    return (
        <div className='friend' key={props.key} >
            <h5>{props.name}</h5>
            <h6>Age: {props.age}</h6>
        </div>
    )
}

export default Friend;