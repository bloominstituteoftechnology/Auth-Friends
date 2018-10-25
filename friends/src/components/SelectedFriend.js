import React from "react";
import '../App.css';

export default function SelectedFriend(props) {
  return (
    <div className="selected-friend">
      <button className="close-button" onClick={() => props.handleShowFriend({})}>X</button>
      <h4>{props.selected.name}</h4>
      <div>{props.selected.email}</div>
      <div className="selected-age">{props.selected.age}</div>
      <button onClick={() => props.toggleShowUpdate()}>
        Update Friend
      </button>
    </div>
  );
}
