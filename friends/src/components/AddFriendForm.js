import React, { useState } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getFriends } from "../actions";
import { useHistory } from "react-router-dom";

const AddFriendForm = (props) => {
  const history = useHistory();
  const [friendForm, setFriendForm] = useState({
    name: "",
    email: "",
    age: "",
    id: Date.now(),
  });

  const [newFriend, setNewFriend] = useState([]);

  const handleChange = (e) => {
    setFriendForm({
      ...friendForm,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friendForm)
      .then((res) => {
        console.log("res on the handlesubmit", res.data);
        setNewFriend(res.data);
        props.getFriends(newFriend);
      })
      .catch((err) => console.log(err));
    setFriendForm({
      name: "",
      age: "",
      email: "",
      id: "",
    });
    history.push("/dashboard/friends");
  };

  return (
    <div>
      <h3>Add a New Friend</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Friend's name"
          value={friendForm.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Friend's email"
          value={friendForm.email}
          onChange={handleChange}
        />

        <input
          name="age"
          placeholder="Friend's age"
          value={friendForm.age}
          onChange={handleChange}
        />
        <button>ADD FRIEND</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};
export default connect(mapStateToProps, { getFriends })(AddFriendForm);
