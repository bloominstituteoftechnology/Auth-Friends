import React, { useState } from 'react';
import AxiosWithAuth from '../utilz/AxiosWithAuth'


const Login = (props) =>{

const [credentials, setCredentials] = useState({
    username: '',
    password: '',
});

const [isFetching, setIsFetching] = useState(false)

const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
const login = e => {
    e.preventDefault();
    setIsFetching(true);
    AxiosWithAuth()
    .post('/login', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
    })
    .catch(err => console.log(err))
}
return(
   <form onSubmit={login}>
        <input type="text" name="username" onChange={handleChange} placeholder="username" />
        <input type="text" name="password" onChange={handleChange} placeholder="password"/>
        <button type="submit">LOGIN</button>
</form> 
)


}

export default Login;