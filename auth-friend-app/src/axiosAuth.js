import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:7000/api",
    headers: {
      Authorization: token
    }
  });
};
