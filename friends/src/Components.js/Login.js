import React,{useState} from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';

const Login = props => {
    const  [credentials, setCredentials] = useState({
        username:'', 
        password:'',
    })

    const handleChange = (e) => {
        setCredentials (
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/myfriends')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Enter user name' name='username' value={credentials.username} onChange={handleChange} />
                <input type='password' placeholder='Enter password' name='password' value={credentials.password} onChange={handleChange} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;