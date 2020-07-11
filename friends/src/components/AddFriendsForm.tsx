import * as React from "react";
import {CircularProgress} from "@material-ui/core";
import {useState} from "react";
import axios from "axios";
import "./AddFriendsForm.css";
import {axiosWithAuth} from "../utils/axiosWithAuth";


interface AddFriendsProps {
    loading: boolean;
}

const AddFriendsForm: React.FC<AddFriendsProps> = ({loading}) => {
    const [friendData, setFriendData] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: "",
    });

    const postFriend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formatedFriend = {...friendData, age: parseInt(friendData.age)};

        axiosWithAuth().post("http://localhost:5000/api/friends", formatedFriend)
            .then(res => {//todo: do I need a type for res with ts?
                console.log(res);
            }).catch(console.log);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFriendData({...friendData, [e.target.name]: e.target.value});
    }

    return (
        <div className="addFriend">
            {!loading ?
                <form className="form" onSubmit={postFriend}>
                    <label className="label">
                        <input
                            className="input"
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={handleChange}
                            value={friendData.name}
                        />
                    </label>
                    <label className="label">
                        <input
                            className="input"
                            type="text"
                            name="age"
                            placeholder="age"
                            onChange={handleChange}
                            value={friendData.age}
                        />
                    </label>
                    <label className="label">
                        <input
                            className="input"
                            type="text"
                            name="email"
                            placeholder="email"
                            onChange={handleChange}
                            value={friendData.email}
                        />
                    </label>
                    <button className="button">Add Friend</button>
                </form>
                : <CircularProgress/>}
        </div>
    );
}

export default AddFriendsForm;