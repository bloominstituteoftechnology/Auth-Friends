import React from "react";

function Friend(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Friend;
