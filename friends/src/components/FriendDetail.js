import React from 'react';

const FriendDetail = ({friend, isFetchingFriend}) => {
  if (isFetchingFriend) {
    return <div>Loading ... </div>
  } else if (!friend) {
    return <div>Click A Friend For Detail</div>
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