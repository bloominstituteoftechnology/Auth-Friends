import React from 'react';

import '../styles/Friends.css';

export default function Friends(props) {
  const friendClickedHandler = email => {
    props.friendClicked(email);
  };

  const deleteFriendHandler = index => {
    props.deleteFriend(index);
  };

  const editFriendHandler = (email, index) => {
    props.editFriendButtonClicked(email, index);
  };

  return (
    <div className="Friends">
      {props.friends
        ? props.friends.map((friend, index) => {
            return (
              <div key={friend.email} className="FriendContainer">
                {!props.friendClickedEmails.includes(friend.email) ? (
                  <div
                    className="Friend"
                    onClick={() => friendClickedHandler(friend.email)}
                  >
                    <h1>{friend.name}</h1>
                  </div>
                ) : (
                  <div className="FriendDetailed">
                    <div className="ButtonsHeader">
                      <button
                        className="DeleteFriendButton"
                        onClick={() => deleteFriendHandler(index)}
                      >
                        &#x2717;
                      </button>
                    </div>

                    <div className="FriendsInfoList">
                      <button
                        className="EditFriendButton"
                        onClick={
                          props.editingFriendEmail
                            ? null
                            : () => editFriendHandler(friend.email, index)
                        }
                        style={
                          props.editingFriendEmail
                            ? { opacity: 0.2 }
                            : { opacity: 1.0 }
                        }
                      >
                        edit
                      </button>

                      <li className="Friend__listItem">
                        <h2 className="Friend__listItem--name">
                          {friend.name}
                        </h2>
                      </li>

                      <li className="Friend__listItem">
                        <div className="Friend__listItem--email">
                          {friend.email}
                        </div>
                      </li>

                      <li className="Friend__listItem">{friend.age} y/o</li>
                    </div>

                    <div className="FriendsDetailedHeader">
                      <button
                        className="CloseDetailedInfoButton"
                        onClick={() => friendClickedHandler(friend.email)}
                      >
                        close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}
