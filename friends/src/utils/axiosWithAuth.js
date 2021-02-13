import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("tokwn");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api'
    });
};