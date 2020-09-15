import axios from 'axios';

export const axiosAuthWithToken = () => {
    const token = localStorage.getItem("token");
    return axios.create({
      headers: {
        Authorization: token
      },
      baseURL: "http://localhost:5000"
    });
  };
  
  export const axiosAuth = () => {
      return axios.create({
          basURL: "http://localhost:5000"
      })
  }