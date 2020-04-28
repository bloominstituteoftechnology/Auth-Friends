import React from 'react';
import {useForm} from 'react-hook-form';
import useInput from './useInput';
import axiosWithAuth from './AxiosWithAuth';

const LoginForm = (props) => {
    const {register} = useForm()
    const [username,setUsername,handleUsername] = useInput("")
    const [password,setPassword,handlePassword] = useInput("")

    const handleSubmit = e => {
        e.preventDefault()
        const credentials = {
            username: username,
            password: password
        }
        axiosWithAuth()
            .post('/api/login',credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token',res.data.payload)
                props.history.push('/protected')
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type="text" name="username" value={username} onChange={e => handleUsername(e.target.value)} ref={register}></input>
                <label>password</label>
                <input type="text" name="password" value={password} onChange={e => handlePassword(e.target.value)} ref={register}></input>
                <button type="submit">log in</button>
            </form>
        </div>
    );
}

export default LoginForm;
