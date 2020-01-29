import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'http://localhost:5000', //needs to be fixed with the information I am grabbing

    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
