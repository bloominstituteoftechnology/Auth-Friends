import React from 'react'

function FriendList(props) {
    return (
        <div className="note-list">
          <h1>Friends</h1>
          {props.friends.map((friends) => (
            <div className="note" key={friends.id}>
              <p>Name: {friends.name}</p>
              <p>Age: {friends.age}</p>
              <p>Email: {friends.email}</p>
            </div>
          ))}
        </div>
      );
}

export default FriendList