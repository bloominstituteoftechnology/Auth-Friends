import React from "react";
function Friend(props) {
  return (
    <div className={`friend ${props.name}`}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <button id={props.id} onClick={props.onDelete}>
        Delete
      </button>
      <button id={props.id} onClick={props.onUpdate}>
        Update
      </button>
    </div>
  );
}
export default Friend;
