import React,{useState} from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';

const Login = props => {
    const  [credentials, setCredentials] = useState({
        username:'', 
        password:'',
    })

    const hadleChange = (e) => {
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
            props.history.push('/friends')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <input />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;