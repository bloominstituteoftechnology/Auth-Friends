import React from "react";

const FriendsForm = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="name" value="#" />
      <input type="text" name="age" placeholder="age" value="#" />
      <input type="email" name="email" placeholder="Email" value="#" />
      <input type="button" value="Add New Friend" />
    </form>
  );
};

export default FriendsForm;
