import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import Friends from "./Friends";
import NewFriendForm from "./NewFriendForm";

const FriendsList = ({refresh, setRefresh}) => {
  const [list, setList] = useState([]);
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChanges = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    axiosWithAuth()
      .post("/friends", friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setFriend({ name: "", age: "", email: "" });
    setRefresh(!refresh)

  };

  return (
    <div>
      <section>
        <NewFriendForm
          handleChanges={handleChanges}
          submit={onSubmit}
          friend={friend}
        />
      </section>

      <section>
        {list.map((friend) => {
          return <Friends key={friend.id} friend={friend} setList={setList} />;
        })}
      </section>
    </div>
  );
};

export default FriendsList; 