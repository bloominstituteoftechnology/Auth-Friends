import React from 'react'; 

const FriendsForm = () => {
    return (
        <div className = "friendsForm">
            <input type = "text" name = "name" placeholder = "Name" />
            <input type = "text" name = "age" placeholder = "Age"/>
            <input type = "text" nae = "email" placeholder = "Email" />
            <button> Add Contact </button>
        </div>
    )
}

export default FriendsForm; 