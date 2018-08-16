import React from 'react' 

function Friend (props){
    return (
        <div>
            <p><strong>Name: </strong> {props.name}</p>
            <p><strong>Age: </strong> {props.age}</p>
            <p><strong>Email: </strong> {props.email}</p>
        </div>
    )
}

export default Friend