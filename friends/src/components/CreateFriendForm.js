import React from 'react';

export default function CreateFriendForm(props) {
    return (
        <form>
            <input type="text"
            name="nameInput"
            placeholder="Name"
            value={props.nameInput}
            onChange={props.handleChange}
            />
            <input type="number"
            name="ageInput"
            placeholder="Age"
            value={props.ageInput}
            onChange={props.handleChange}
            />
            <input type="email"
            name="emailInput"
            placeholder="Email"
            value={props.nameInput}
            onChange={props.handleChange}
            />
            <button onClick={event => props.addNewFriend(event)}>Add Friend</button>

        </form>
    )
}