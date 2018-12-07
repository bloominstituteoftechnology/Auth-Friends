import React from 'react';

const FriendDetail = ({friend, isFetchingFriend}) => {
  if (isFetchingFriend) {
    return <h4>Loading ... </h4>
  } else if (!friend) {
    return <h4>Click A Friend For Detail</h4>
  } else {
    return (
      <div className="friend-detail">
        <h4>{friend.name}</h4>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
      </div>
    )
  }
}

export default FriendDetail;