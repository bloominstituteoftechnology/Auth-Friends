import React from 'react';


export const Friends = (props)=>{
    return(
        <div>
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
        </div>
    )
}