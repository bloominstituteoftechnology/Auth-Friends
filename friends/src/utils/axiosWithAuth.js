import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.token;
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    });
};