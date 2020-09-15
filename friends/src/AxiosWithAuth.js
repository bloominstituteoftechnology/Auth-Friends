import axios from 'axios';

export default function AxiosWithAuth(){
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {authorization: localStorage.getItem('token')}
    })
}