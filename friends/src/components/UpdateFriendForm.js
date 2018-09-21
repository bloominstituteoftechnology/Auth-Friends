import React from 'react';

export default function UpdateFriendForm(props) {
    return (
        <form>
            <input type="text"
            name="nameInput"
            placeholder="Name"
            value={props.friend.name}
            onChange={props.handleChange}
            />
            <input type="number"
            name="ageInput"
            placeholder="Age"
            value={props.friend.age}
            onChange={props.handleChange}
            />
            <input type="email"
            name="emailInput"
            placeholder="Email"
            value={props.friend.email}
            onChange={props.handleChange}
            />
            <button onClick={event => props.updateNewFriend(event, {props.friends.id})}>Update Friend</button>

        </form>
    )
}