import React, { useState, useEffect } from "react";

import Friend from "./Friend";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {friends.map(homie => (
                <Friend value={homie.id} homie={homie} />
            ))}
        </div>
    )
}

export default FriendList;