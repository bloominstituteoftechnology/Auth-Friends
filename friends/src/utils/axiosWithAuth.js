import axios from "axios";

// create a new 'instance' of axios that will have
// all our configs on it, and we will be ale to use
//it in place of axios throughout our app

export const axiosWithAuth = () => {
  return axios.create({
    // axios request config
    //https://github.com/axios/axios#request-config
    baseURL: "http://localhost:5000", //automatically add this url to the get. easier to read
    headers: { Authorization: localStorage.getItem("token") } // pass the Auth token that is store in localStorage to the server
  });
};

// axiosWithAuth() --> return on instance of axios
