import React from 'react';
import JSONPretty from 'react-json-pretty'

const Friend = (props) =>{


    return(

        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <JSONPretty data={props} />
        </div>
    )
}

export default Friend;