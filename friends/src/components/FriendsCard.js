import React from 'react';


const FriendsCard = props => {

  const { name, id } = props.friend;

  return(
    <div >
        <h4>{name}</h4>
        <div >
          <h5>{id}</h5>
        </div>
      
    
      </div>
  );
};

export default FriendsCard;