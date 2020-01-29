import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Friend from "./Friend";
import AddFriend from "./AddFriend";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            // console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [friends])

    return (
        <Router>
            <div>
                <div>
                    <Link to="/add">Add Friend</Link>
                </div>
                <div>
                    <Route path="/add" component={AddFriend} />
                </div>
                <div>
                    {friends.map(homie => (
                        <Friend value={homie.id} homie={homie} />
                    ))}
                </div>
            </div>
        </Router>
    )
}

export default FriendList;