import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input id="username" name="username" />

                <label htmlFor="password" >Password:</label>
                <input id="password" name="password" />

                <button>Submit</button>
            </form>
        </div>
    )
};

export default Login;