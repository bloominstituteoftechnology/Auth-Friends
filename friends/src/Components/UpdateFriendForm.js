import React from 'react';

const UpdateFriendForm = props => {
    return (
        <div>
            <h1>Update a friend</h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Age' />
                <input placeholder='Email' />
            </form>
        </div>
    )
}

export default UpdateFriendForm;