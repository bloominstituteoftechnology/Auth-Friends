import React from 'react';
import axios from 'axios';

const AxiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return (
        axios
            .create({
                baseURL: 'http://localhost:5000',
                headers: {
                    Authorization: token
                }
            })
    );
}

export default AxiosWithAuth;
