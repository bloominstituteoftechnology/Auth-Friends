import React from 'react'

const FriendPage = props => {
    const id = props.friend.id;
    //const friend = props.friends.find(friend => `${friend.id}` === id);

    const handleDelete = (event) => {
        event.preventDefault();
        props.handleDeleteFriend(id)
    }

    return (
        <div className="friend-card" key={props.friend.id}>
                <h3> Name: {props.friend.name} </h3>
                <p>Age: {props.friend.age} </p>
                <p>Email: {props.friend.email} </p>
                <p>ID: {props.friend.id} </p>
                <div style={{cursor: "pointer"}} onClick={handleDelete}> X </div>
        </div>
    )
}

export default FriendPage