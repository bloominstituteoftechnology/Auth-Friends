import React from 'react';
import '../App.css'


const CreateFriendForm = () => {
    return (
        <div>
            <form className = "form-div">
                <input
                    placeholder = "name"
                    name = "name"
                />

                <input
                    placeholder = "age"
                    name = "age"
                />
          
                <input
                    placeholder = "email"
                    name = "email"
                />

                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default CreateFriendForm;