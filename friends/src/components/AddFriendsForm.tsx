import * as React from "react";
import {CircularProgress} from "@material-ui/core";
import {useContext, useState} from "react";
import axios from "axios";
import "./AddFriendsForm.css";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {FriendsContext} from "../contexts/FriendsContext";


interface AddFriendsProps {
    //loading: boolean;
    //setLoading: any;//(loading: boolean) => void;
}

const AddFriendsForm: React.FC<AddFriendsProps> = () => {
    const [friendData, setFriendData] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: "",
    });

    const{loading, setLoading} = useContext(FriendsContext);

    const postFriend = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        const formattedFriend = {...friendData, age: parseInt(friendData.age)};

        axiosWithAuth().post("http://localhost:5000/api/friends", formattedFriend)
            .then(res => {//todo: do I need a type for res with ts?
                console.log(res);
                clearForm();
                setLoading(false);
            }).catch(err => {
            console.log("Could not add new friend: ", err);
            setLoading(false);
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFriendData({...friendData, [e.target.name]: e.target.value});
    }

    const clearForm = (): void => {
        setFriendData({
            id: Date.now(),
            name: "",
            age: "",
            email: "",
        });
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