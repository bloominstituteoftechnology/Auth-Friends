import React, { Fragment } from 'react';

function FriendForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        props.handleAddNewAvenger(event);
    }

    return (
        <Fragment>
            <h2>Add New Friend</h2>
            <form>
                <input 
                    type='text'
                    value={props.friend.name}
                    name='name'
                    onChange={props.handleChange}
                />
                <input 
                    type='number'
                    value={props.friend.age}
                    name='age'
                    onChange={props.handleChange}
                />
                <input 
                    type='text'
                    value={props.friend.email}
                    name='email'
                    onChange={props.handleChange}
                />
                <button onClick={handleSubmit}>Add Friend</button>
            </form>
        </Fragment>
    );
}

export default FriendForm;