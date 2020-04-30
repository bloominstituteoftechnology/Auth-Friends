import React, { useEffect } from "react";
import axiosWithAuth from "../auth/axiosWithAuth";
import { useState } from "react";

export default (props) => {
  const [state, setState] = useState({
    friends: [],
    isEditing: false,
    id: 0,
    placeholders: {
      uname: "",
      uage: "",
      uemail: "",
    },
    credentials: {
      name: "",
      age: "",
      email: "",
    },
    updatedUser: {
      name: "",
      age: "",
      email: "",
    },
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setState((s) => ({ ...s, friends: res.data }));
      })
      .catch((err) => console.log(err));
  }, [state.friends]);

  const handleChange = (e) => {
    setState({
      ...state,
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axiosWithAuth()
      .post("/api/friends", state.credentials)
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
    setState({
      ...state,
      updatedUser: { ...state.updatedUser, [e.target.name]: e.target.value },
    });
    console.log(state);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const id = state.id;
    axiosWithAuth()
      .put(`/api/friends/${id}`, state.updatedUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setState({ ...state, isEditing: false });
  };

  return (
    <div>
      <h4> Friend List</h4>
      {state.isEditing ? (
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder={state.placeholders.uname}
            onChange={handleUpdate}
          />
          <br />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            placeholder={state.placeholders.uage}
            onChange={handleUpdate}
          />
          <br />
          <label>E-mail:</label>
          <input
            type="text"
            name="email"
            placeholder={state.placeholders.uemail}
            onChange={handleUpdate}
          />
          <br />
          <button onClick={handleUpdateSubmit}>UPDATE NOW </button>
        </div>
      ) : state.friends ? (
        state.friends.map((student) => {
          return (
            <div key={student.id}>
              <h2>{student.name}</h2>
              <h2>{student.age}</h2>
              <h2>{student.email}</h2>
              <button id={student.id} onClick={handleDelete}>
                DELETE
              </button>
              <button
                id={student.id}
                uname={student.name}
                uage={student.age}
                uemail={student.email}
                onClick={(e) =>
                  setState({
                    ...state,
                    isEditing: true,
                    id: Number(e.target.id),
                    placeholders: {
                      uname: e.target.getAttribute("uname"),
                      uage: e.target.getAttribute("uage"),
                      uemail: e.target.getAttribute("uemail"),
                    },
                  })
                }
              >
                UPDATE
              </button>
            </div>
          );
        })
      ) : (
        <h4>Loading...</h4>
      )}
      <div>
        <br />
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={state.credentials.name}
          onChange={handleChange}
        />
        <br />
        <label>Age: </label>
        <input
          type="text"
          name="age"
          value={state.credentials.age}
          onChange={handleChange}
        />
        <br />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={state.credentials.email}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>ADD</button>
      </div>
    </div>
  );
};
