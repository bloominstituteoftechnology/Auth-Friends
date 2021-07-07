import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const Login = () => {

    const {push} = useHistory()

    const [credentials,setCredentials] = useState({username:'',password:''})
console.log('userState',credentials)
    const HandleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
            
    }

    const submitLogin=(e) => {
        e.preventDefault()
        axiosWithAuth().post('/api/login',credentials)
            .then((res) => {
                console.log('res:', res)
                localStorage.setItem('token',res.data.payload)
            })
            .catch((err) => {
                console.log('error', err)
            })
        setCredentials({
            username:'',
            password:''
            
        })
        push('/friends')
    }

    return(
        <form onSubmit={submitLogin}>
        <label>
            UserName
           <input  name='username' value={credentials.username} type='text' onChange={HandleChange}/> 
        </label>
        <label>
            Password
           <input name='password' value={credentials.password} type='password' onChange={HandleChange}/> 
        </label>
        <button>Login</button>
        </form>
    )
}

export default Login