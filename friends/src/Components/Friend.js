import React from 'react'

const Friend = ({friend}) =>{
    return(
        <div className="friendContainer">
            <h3>Friend Name:  {friend.name}</h3>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
    )

}

export default Friend