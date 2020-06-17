import React from 'react';

const FriendsCard = props => {

  const { name, id } = props.friend;

  return(
    <div >
        <h2>{name}</h2>
        <div >
          <em>{id}</em>
        </div>
      
    
      </div>
  );
};

export default FriendsCard;