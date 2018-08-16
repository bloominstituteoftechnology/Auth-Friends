import React from 'react'; 

const FriendsForm = (props) => {
    return (
        <div className = "friendsForm">
            <input onChange = {props.change} type = "text" name = "name" placeholder = "Name" />
            <input onChange = {props.change} type = "text" name = "age" placeholder = "Age"/>
            <input onChange = {props.change} type = "text" name = "email" placeholder = "Email" />
            <button onClick = {props.submit}> Add Contact </button>
        </div>
    )
}

export default FriendsForm; 