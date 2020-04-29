import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import "./Register.css";

const initialState = {
    name: "",
    age: "",
    email: "",
    password: "",
    isFetching: false
};

const Register = props => {
    const [data, setData] = useState(initialState);

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.prevent.default();
        delete data.isFetching;
        axios.post("")
            .then(response => {
                props.history.push("/");
            })
            .catch(error => {
                console.log("Sorry, an error has occured.", error)
            });
    };

    return (
        <div>
            <h1>Friends!</h1>
            <h2>Create a New Account</h2>
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Enter first name"
                    value={data.firstname}
                    onChange={handleChange}
                />
                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    placeholder="Enter age"
                    value={data.age}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter email address"
                    value={data.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;