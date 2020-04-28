import React, { useEffect } from "react";
import axiosWithAuth from "../auth/axiosWithAuth";
import { useState } from "react";

export default (props) => {
  const [friends, setFriends] = useState();
  //
  const [creds, setCreds] = useState({
    credentials: {
      name: "",
      age: "",
      email: "",
    },
  });

  //
  const [user, setUser] = useState({
    updatedUser: {
      name: "",
      age: "",
      email: "",
    },
  });
  const [isEditing, setIsEditing] = useState(false);
  //

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, [friends]);

  const handleChange = (e) => {
    setCreds({
      credentials: {
        ...creds.credentials,
        [e.target.name]: e.target.value,
      },
    });
    console.log(creds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
    axiosWithAuth()
      .post("/api/friends", creds.credentials)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const { id } = e.target;
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleUpdate = (e) => {
    setUser({
      updatedUser: { ...user.updatedUser, [e.target.name]: e.target.value },
    });
    console.log(user);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;
    axiosWithAuth()
      .put(`/api/friends/${id}`, user.updatedUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setIsEditing(false);
  };

  return (
    <div>
      <h4> Friend List</h4>
      {friends ? (
        friends.map((student) => {
          return (
            <div>
              {isEditing ? (
                <div>
                  <label>Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={user.updatedUser.name}
                    onChange={handleUpdate}
                  />
                  <br />
                  <label>Age:</label>
                  <input
                    type="text"
                    name="age"
                    value={user.updatedUser.age}
                    onChange={handleUpdate}
                  />
                  <br />
                  <label>E-mail:</label>
                  <input
                    type="text"
                    name="email"
                    value={user.updatedUser.email}
                    onChange={handleUpdate}
                  />
                  <br />
                  <button id={student.id} onClick={handleUpdateSubmit}>
                    UPDATE NOW{" "}
                  </button>
                </div>
              ) : (
                <div key={student.id}>
                  <h2>{student.name}</h2>
                  <h2>{student.age}</h2>
                  <h2>{student.email}</h2>
                  <button onClick={handleDelete}>DELETE</button>
                  <button onClick={() => setIsEditing(true)}>UPDATE</button>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <h4>Loading...</h4>
      )}
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={creds.credentials.name}
        onChange={handleChange}
      />
      <br />
      <label>Age: </label>
      <input
        type="text"
        name="age"
        value={creds.credentials.age}
        onChange={handleChange}
      />
      <br />
      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={creds.credentials.email}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};
