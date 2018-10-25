import React from "react";

export default function SelectedFriend(props) {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <button onClick={() => props.handleShowFriend({})}>X</button>
      <div>{props.selected.email}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => props.toggleShowUpdate()}>
        Update Friend
      </button>
    </div>
  );
}
