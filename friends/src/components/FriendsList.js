import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

const FriendsList = () => {
  const [list, setList] = useState([]);
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const changeHandle = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    axiosWithAuth()
      .post("/api/friends", friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setFriend({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <section>
        <AddFriendForm
          changeHandle={changeHandle}
          submit={onSubmit}
          friend={friend}
        />
      </section>

      <section>
        {list.map((friend) => {
          return <Friend key={friend.id} friend={friend} setList={setList} />;
        })}
      </section>
    </div>
  );
};

export default FriendsList;