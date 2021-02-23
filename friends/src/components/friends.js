import React from "react";

export function friend({ friend }) {
  return (
    <div className="friendCard">
      <h1>Name:{friend.name}</h1>
      <h4>Age:{friend.age}</h4>
      <h4>Email:{friend.email}</h4>
      <h4>ID:{friend.id}</h4>
    </div>
  );
}
export default friend;
