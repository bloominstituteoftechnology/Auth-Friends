import React, { useState } from "react";
import axios from "axios";

const FriendForm = (props) => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        email: "",
    });

    const [post, setPost] = useState([]);

    const handleChanges = (e) => {
        console.log(form);

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewFriend(form);
        axios
            .post("http://localhost:5000/api/friends", form)
            .then((res) => {
                setPost(res.data);
                console.log("success", post);

                setForm({ name: "", age: "", email: "" });
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={form.name}
            />
            <label htmlFor='age'>Age</label>
            <input
                id='age'
                type='text'
                name='age'
                onChange={handleChanges}
                value={form.age}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                name='email'
                onChange={handleChanges}
                value={form.email}
            />

            <button type='submit'>Add Friend</button>
        </form>
    );
};

export default FriendForm;
