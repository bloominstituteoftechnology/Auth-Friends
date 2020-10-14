import React from "react";

const Friend = function (props) {
  const { name, age, email, id } = props.friendData;
  const selector = props.selectFriend; 

  return (
    <div onClick={() => selector(id)}>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p>
    </div>
  );
};

export default Friend;
