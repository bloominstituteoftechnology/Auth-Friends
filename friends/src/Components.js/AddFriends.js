import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

const AddFriends = () => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''})

        const handleChange = (e) => {
            setFriend(
                {
                    ...friend,
                    [e.target.name]: e.target.value
                }
            )
        }

        const onSumbit =(e) => {
            e.preventDefault()
            axiosWithAuth()
            .post('/friends', friend)
            .then(res => {
                console.log(e.target)
                setFriend(
                    {
                        ...friend,
                            name: "",
                            age: "",
                            email:""
                    }
                )
            })
            .catch(error => console.log(error));
        };

        return (
            <Form onSumbit={onSumbit}>
                <input
                type="text"
                name="name"
                placeholder="friends name"
                value={friend.name}
                onChange={handleChange}
                />
                <input
                 type="text"
                 name="name"
                 placeholder="friends age"
                 value={friend.age}
                 onChange={handleChange}
                />
                <input
                 type="text"
                 name="name"
                 placeholder="friends email"
                 value={friend.email}
                 onChange={handleChange}
                />
                <button type='submit'>Add new friend</button>
            </Form>
        );




};

export default AddFriends;