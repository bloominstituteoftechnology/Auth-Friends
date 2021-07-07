import axios from 'axios';

// Allows us to create a method to use throughout app to handle the fact that we are logged in

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token'); //Gives us access to token value

    //.create allows us to use the same instance of axios vs creating a new one each time w/ route as needed
    return axios.create({
        baseURL: `http://localhost:5000/api`,
        headers: {
            Authorization: token
        }
    });
};