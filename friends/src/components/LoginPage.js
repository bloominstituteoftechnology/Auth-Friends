import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const LoginPage = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const handleChanges = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault()
        console.log("user", user)
        setIsLoading(true)
        axios.post('http://localhost:5001/api/login', user)
        .then(req =>{
            localStorage.setItem("token", req.data.payload)
            history.push("/friends")
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Log In To Friends App!</h1>
            {(!isLoading && 
                <form onSubmit={login}>
                    <input 
                        type='text'
                        name='username'
                        value={user.username}
                        placeholder='username'
                        onChange={handleChanges}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={user.password}
                        placeholder='password'
                        onChange={handleChanges}
                    />
                    <button type='submit'> Log In </button>
                </form>
            )}   
            {(isLoading && 
                    <div> Friends List Is Loading...
                    </div>
            )}           
        </div>
    )
}