import React from 'react';


export const Friends = (props)=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    )
}