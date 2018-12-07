import React from 'react';


function AllFriends(props ) {
  console.log('component is being Rendered');
  if (!props.friends || props.fetchingFriends) {
    return <h4>Loading Friends List Now</h4>;
  }

  return (
    <>
    {props.friends.map( each => (
      <div className="friendBox" key={each.id} >{each.id}
      <h1>Name: {each.name}</h1>
      </div>
    ))}
    </>
  );
}