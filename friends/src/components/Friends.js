
import React from 'react';

function Friends (props) {
    if (!props.friends || !props.friends.length) {
        return <h1>You have no friends. :( Go fetch them!</h1>
    }
    return <div className="characters-list-wrapper">
        {props.friends.map(friend => (
          <div className="friend-card" key={friend.id}>
            {friend.name}
            {friend.age}
            {friend.email}
          </div>
        ))}
      </div>;
}

export default Friends;