import React from 'react';
import '../App.css'



const CreateFriendForm = (props) => {
    console.log("Form : ",props);
    return (
        <div>
            <form className = "form-div" onSubmit = {props.onFormSubmit}>
                <input
                    onChange = {props.onChange}
                    placeholder = "name"
                    name = "name"
                />

                <input
                    onChange = {props.onChange}
                    placeholder = "age"
                    name = "age"
                />
          
                <input
                    onChange = {props.onChange}
                    placeholder = "email"
                    name = "email"
                />

                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default CreateFriendForm;