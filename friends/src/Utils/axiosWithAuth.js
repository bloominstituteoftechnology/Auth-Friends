import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    //console.log(token);
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;