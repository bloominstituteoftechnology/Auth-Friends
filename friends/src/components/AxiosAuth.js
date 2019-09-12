import React from 'react';

import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');

    return axios.create({
        header: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}