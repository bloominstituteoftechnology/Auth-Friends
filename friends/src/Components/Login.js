import React, {useState} from 'react';
import axios from 'axios';

const initialState = {
    credentials: {
        username: '',
        password: ''
    }
};

const Login = () => {

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        setFormData({
            credentials: {
                ...formData.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios 
            .post('http://localhost:5000/api/login', formData.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                // history.push('/protected')
            })
            .catch(err => {
                console.log(err)
            })

    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={formData.credentials.username} onChange={handleChange} type='text' name='username' placeholder= 'UserName'/> <br/>
                <br/>
                <input value={formData.credentials.password} onChange={handleChange} type='password' name='password' placeholder='Password'/> <br/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;