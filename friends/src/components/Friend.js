import React from 'react';



const Friend = ({name, age, email}) => {
    return (
        <div>
            <h4> name: {name} </h4>
            <p> age: {age} </p>
            <p> email: {email} </p>
   
        </div>
    )
}

export default Friend;

