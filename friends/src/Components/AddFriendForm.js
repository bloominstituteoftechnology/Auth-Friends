import React from 'react';

const AddFriendForm = props => {
    return (
        <div>
            <h1>Create a friend!</h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Age' />
                <input placeholder='Email' />
            </form>
        </div>
    )
}

export default AddFriendForm;