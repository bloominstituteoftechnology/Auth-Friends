import React from 'react';

export default function FriendForm(props) {
    return (
        <div>
            <form onSubmit={props.addFriendHandler} >
                <input placeholder='name...' onChange={props.handleInputChange} name='name' value={props.inputName} />
                <input placeholder='age...' onChange={props.handleInputChange} name='age' value={props.inputAge} />
                <input placeholder='email...' onChange={props.handleInputChange} name='email' value={props.inputEmail} />
                <button  >Submit it</button>
            </form>
        </div>
    );
}