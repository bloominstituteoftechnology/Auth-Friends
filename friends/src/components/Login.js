import React, { useState } from 'react';

const Login = (props) => {
    const [creds, setCreds] = useState({});
    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value});
    };
    return (
        <form>
            <input type="type"
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={creds.username} />
            <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    value={creds.password} />
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;