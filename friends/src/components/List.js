import React from "react";

function List(props) {
  //console.log('rendering')

  return (
    <>
      {props.friends.map(friend => (
        <div key={friend.id}>
          {friend.name}
          {friend.age}
        </div>
      ))}
    </>
  );
}

export default List;
