import React from 'react';
import '../styles/Friends.css';

export default function Friends(props) {
  const friendClickedHandler = email => {
    props.friendClicked(email);
  };

  return (
    <div className="Friends">
      {props.friends
        ? props.friends.map(friend => {
            return (
              <div
                key={friend.email}
                className="FriendContainer"
                onClick={() => friendClickedHandler(friend.email)}
              >
                {!props.friendClickedEmails.includes(friend.email) ? (
                  <div className="Friend">{friend.name}</div>
                ) : (
                  <div>
                    <li>{friend.name}</li>
                    <li>{friend.age}</li>
                    <li>{friend.email}</li>
                  </div>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}
