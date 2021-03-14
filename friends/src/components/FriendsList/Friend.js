import React from "react";
import "./friend.styles.css";

export const Friend = (props) => {
  const { name, email } = props.friend;

  return (
    <div className="card profile-card-1">
      <img
        src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
        alt="profile-sample1"
        className="background"
      />
      <h1 className="profile">{name[0].toUpperCase()}</h1>
      <div className="card-content">
        <h2>
          {name}
          <small>{email}</small>
        </h2>
      </div>
    </div>
  );
};
