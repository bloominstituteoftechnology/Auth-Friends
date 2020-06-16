import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/AxioswithAutho";
// Compontents
import Friend from "./Friend";
import FriendForm from "./FriendForm";

function FriendPage() {
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res) => {
                setFriends(res.data);
            })
            .catch((error) => {
                console.error("Server Error", error);
            });
    }, []);

    const [friends, setFriends] = useState([
        {
            id: "",
            name: "",
            age: "",
            email: "",
        },
    ]);

    console.log(friends);

    const addNewFriend = (friend) => {
        const newFriend = {
            id: Date.now(),
            name: friend.name,
            age: friend.age,
            email: friend.email,
        };
        setFriends([...friends, newFriend]);
    };

    return (
        <div className='App'>
            <h1>My Friends</h1>

            <FriendForm addNewFriend={addNewFriend} />
            <Friend friends={friends} />
        </div>
    );
}

export default FriendPage;
