import React from 'react';


//props:
//id={f.id} 
// name={f.name}
// age={f.age}
// email={f.email}

const Friend = props => {
    return(
        <div>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.email}</li>
        </div>
    )
}

export default Friend;