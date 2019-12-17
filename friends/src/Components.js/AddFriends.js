import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

const addFriend = () => {
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





}