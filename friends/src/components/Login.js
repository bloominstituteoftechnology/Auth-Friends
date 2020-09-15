import React, {useEffect, useState} from 'react';
import {axiosAuth} from '../utils/axiosWithAuth';

const Login = () => {

    useEffect(() => {
        axiosAuth()
    },[])

    return (
        <div>
            <h2>Login</h2>
        </div>
    )
}

export default Login;