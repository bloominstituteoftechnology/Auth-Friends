import React, { useState } from "react";

const Edit = () => {
  const [editFriend, setEditFriend] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setEditFriend({ ...editFriend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h4 style={{ color: "red" }}>Edit Friend</h4>
      <form>
        <input
          name="name"
          placeholder="Enter New Name"
          value={editFriend.name}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Enter New Age"
          value={editFriend.age}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Enter New Email"
          value={editFriend.email}
          onChange={handleChange}
        />
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default Edit;
