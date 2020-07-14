import axios from 'axios';

export const axiosWithauth = () => {
    const token = localStorage.getItem('token');
    console.log('here');
    console.log(`token is ${token}`);
    return axios.create({
        headers:{
            Authorization: token,
        },
    });
};

