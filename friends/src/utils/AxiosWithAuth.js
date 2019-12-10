import Axios from 'axios';

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return Axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    })
}