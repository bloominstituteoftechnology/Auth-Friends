import axios from 'axios';

export const axiosWithAuth = () => {

    const token = sessionStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {  
            authorization: token
        }
    })

}