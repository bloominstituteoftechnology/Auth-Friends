import React, { useState } from 'react';
// import { useContext } from 'react'
import axios from 'axios'

const LoginForm = (props) => {
    const [addFriend, setAddFriend] = useState([{name: '', age:''}])
    


    return (
        <div className="loginContainer">
            <h1>My, friend!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="name"
                    placeholder="enter username"
                    type="text"
                    value={logini.username}
                    name="username"
                    onChange={changeHandler}
                />
                <input
                    className="password"
                    placeholder="enter password"
                    type="password"
                    value={logini.password}
                    name="password"
                    onChange={changeHandler}
                />
                <button type="submit" className="SubmitButton">Connect!</button>
            </form>
        </div>
    )
}