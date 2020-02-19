import axios from 'axios';

export const axiosWithAuth =(props) => {
    const token = localStorage.getItem('token');

    if(token === "undefined") {
        console.log("NOT LOGGED IN");
    }else{
        console.log("LOGGED IN ", {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        });
    }

    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};