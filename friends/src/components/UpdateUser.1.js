import axios from "axios"
import React, { useState } from "react"

export default function UpdateUser() {


    const initialState = {
        id: Date.now,
        name: "",
        age: "",
        email: ""
    };

    const [friend, setFriend] = useState(initialState);

    const handleChange = e => {
        setFriend(
            {
                ...friend,
                [e.target.name]: e.target.value
            }
        );
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/friends/:id", friend.id)
            .then(response =>{
                
                setFriend(response.data)
             console.log(response)
            })
            .catch(err =>{
                console.log(err)

            })


    };


    return (
        <div>
            <h2>Update a  Friend</h2>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                        name="name"
                        value={friend.name}
                        onChange={handleChange} />
                </label>
                <label>
                    <input
                        name="age"
                        value={friend.age}
                        onChange={handleChange} />
                </label>
                <label>
                    <input
                        name="email"
                        value={friend.email}
                        onChange={handleChange} />
                </label>

                <div>
                    <button onChange={handleChange}></button>
                </div>
            </form>
        </div>

    );










}
