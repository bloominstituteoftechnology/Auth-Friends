import React from 'react';


const FriendsCard = props => {

  const { name, age } = props.friend;

  return(
    <div >
        <h2>{name}</h2>
        <div >
          <h5>Age: {age}</h5>
        </div>
      </div>
  );
};

export default FriendsCard;