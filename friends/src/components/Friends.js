import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./FriendsList";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="friend-container">
            <h1>Friends List</h1>
            <div className="friends">
                {friends.map(friend => {
                return (
                    <div id={friend.id} className="friend">
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <p>{friend.email}</p>
                    </div>
                );
                })}
            </div>
            <AddFriend setFriends={setFriends} />
        </div>
    );
};

export default Friends;