import axios from 'axios';

// Build module that "creates" a new instance of the axios object

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: token
    }
  });
}