import axios from "axios";

export const axiosWithAuth = () => {
    // create an instance of axios with a global config setup
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "http://localhost:5000"
    });
};