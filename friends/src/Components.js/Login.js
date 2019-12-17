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
}