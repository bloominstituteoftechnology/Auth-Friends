import React from 'react';

const FriendsCard = ({ friend }) => {
    return (
  <div className="friends-card">
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <h1 className="card-title">Name: {friend.name}</h1>
          <p>E-mail: {friend.email}</p>
          <p>Age: {friend.age}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}

export default FriendsCard;
