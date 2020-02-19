import React, { useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friends from "./Friends";
import { FriendContext } from "../context/FriendContext";

const FriendList = () => {
    const {friend, setFriend} = useContext(FriendContext)
        useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(response => {
                console.log("Friends: ", response)
                setFriend(response.data)
            })
        }, [])

    return (
        <div>
        <h1>Friend List</h1>
            {friend.map(friend => {
                console.log("Friend List: ", friend)
                return <Friends key={friend.id} friend={friend} />
            })}
        </div>
    )
}

export default FriendList;