import React from 'react';

const FriendsCard = ({ friend }) => {
    return (
        <div className="friends-card">
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <h1 class="card-title">Name: {friend.name}</h1>
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
