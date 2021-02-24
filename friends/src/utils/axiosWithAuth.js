import axios from "axios";
// always remember to add base URL and headers
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token,
    },
  });
};
