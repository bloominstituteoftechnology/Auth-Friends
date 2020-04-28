import axios from "axios";

export default () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "http://localhost:5000/",
  });
};

// testing this way of default export :)
//export default axios
