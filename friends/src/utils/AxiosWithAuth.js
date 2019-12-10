import Axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return Axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    })
}

export default axiosWithAuth;