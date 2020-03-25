import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credential, setCredentials] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })
    const handleChange = e => {
        setCredentials({
            credentials: {
                ...credential.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credential.credentials)
        .then(res => {
            console.log("Login Response", res)
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            props.history.push('/friends')
            
        })
        .catch(err => {
            console.log("There was an",err.response)
        })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' name='username' id='username' value={credential.credentials.username} onChange={handleChange}/>
                <input type="password" name="password" id="passwaord" value={credential.credentials.password} onChange={handleChange}/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;



