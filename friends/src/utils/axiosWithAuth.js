import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        basesURL: 'http://localhost:5000'
    })
}

export default axiosWithAuth;