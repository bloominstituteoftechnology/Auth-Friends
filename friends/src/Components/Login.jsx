import React, {useState} from 'react'
import {axiosWithAuth} from '../Utils/axiosWithAuth'

const initialValue = {
    username: '',
    password: '',
}


const Login = (props) =>{

    const {history} = props;
    const [value, setValue] = useState(initialValue)

    const handleChange = e =>{
        const {name, value} = e.target
        setValue({...value, [name]: value})
    }

    //login using axios with off and login endpoint, finally redirects to /friends page
    const login = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login' , value)
        .then((res)=>{
            localStorage.setItem('token', res.data.payload)
            history.push('/friends')
        })
    }
    return(
        <div>
            <form onSubmit={login}>  
                <label>Username:
                    <input
                    type='text'
                    name='username'
                    value={value.username}
                    onChange={handleChange}
                    />
                </label>
                <label>Password:
                    <input
                    type='text'
                    name='password'
                    value={value.password}
                    onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login