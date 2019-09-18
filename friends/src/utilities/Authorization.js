import axios from 'axios';

const axiosAuth = () => {
    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};

export default axiosAuth;