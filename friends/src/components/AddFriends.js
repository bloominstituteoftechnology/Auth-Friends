import React  from "react";
// import { Link } from "react-router-dom";

function AddFriends() {
  return (
    <div className="add-friends-form">
        <h1>Add your new friend</h1>
      <form>
        <label>
          name
          <input />
        </label>
        <label>
          age
          <input />
        </label>
        <label>
          email
          <input />
        </label>
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriends; 
