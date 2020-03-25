import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const history = useHistory();
    const[isLoading, setIsLoading] = useState(false);
    const[credentials, setCredentials] = useState({
        username:'',
        password:''
    });

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                history.push('/Home');
            })
            .catch(err => console.log(err.response));
        setCredentials({
            username:'',
            password:''
        });       
    };

    return(
        <div>
            {
                isLoading ? (
                    <div>Fetching Data ...</div>
                ) : (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            name='username'
                            placeholder='enter username'
                            value={credentials.username}
                            onChange={handleChanges}
                            />
                        <input 
                            type='password'
                            name='password'
                            placeholder='enter password'
                            value={credentials.password}
                            onChange={handleChanges}
                            />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>)
            }   
        </div>
    );
};