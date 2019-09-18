import React, { useState } from 'react';

const FriendsList = ({submitFriend}) => {
    const [friend, setFriend] = useState({name: "", age: "", email: ""});
    const handleChange = event => setFriend({...friend, [event.target.name]: event.target.value})
    const handleSubmit = event => {
        event.preventDefault();
        submitFriend(friend);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name"
                    placeholder="name"
                    value={friend.name}
                    onChange={handleChange}/>
            <input name="age"
                    placeholder="age"
                    value={friend.age}
                    onChange={handleChange}/>
            <input name="email"
                    placeholder="email"
                    value={friend.email}
                    onChange={handleChange}/>
            <button type="submit">Add Friend</button>
        </form>
    )
}

export default FriendsList;