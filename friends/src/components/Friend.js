import React from 'react'


const Friend = (props) => {

    return(
        <div>
            <p>name: {props.friend.name} age: {props.friend.age} email: {props.friend.email}</p>

        </div>
    )
}

export default Friend;