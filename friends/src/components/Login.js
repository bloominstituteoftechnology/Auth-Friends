import React, { useRef } from 'react';
import axios from 'axios';

function Login() {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submitHandler = () => {
        axios.post('http://localhost:5000/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
        .then((response) => {
        // 1- Put the token string in local storage under a 'token' key
        // localStorage.setItem('token', res.data.token);

        // // 2- Redirect the user's route.
        // PaymentResponse.history.push('/friends')


        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                Username:
                <input 
                ref={usernameRef}
                placeholder='Username'
                />
                <br></br>
                Password:
                <input 
                ref={passwordRef}
                placeholder='Password'
                />

                <div>
                    <button>Login!</button>
                </div>
            </form>

        </div>
    )

}

export default Login;