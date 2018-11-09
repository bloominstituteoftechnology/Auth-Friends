import React from "React";

export const Friend = props => {
  return (
    <div className="friend">
      <h1>{props.name}</h1>
      <p>{props.age} years old</p>
      <p>{props.email}</p>
    </div>
  );
};
