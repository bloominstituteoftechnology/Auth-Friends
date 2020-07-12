import * as React from "react";
import Header from "./Header";
import {useContext} from "react";
import {FriendsContext} from "../contexts/FriendsContext";
import "./FriendsList.css";

type Friend = {
    age: number
    email: string
    id: number
    name: string
};

const FriendsList = () => {

    const {friends} = useContext(FriendsContext);

    return (
        <div className="friendsList">
            <Header/> {/*todo: the friends map pushes the header down?*/}
            <div className="friends">
                {friends.map((friend: Friend) => {
                    return <div key={friend.id} className="friendCard">{friend.name}</div>
                })}
            </div>
        </div>
    );
}

export default FriendsList;