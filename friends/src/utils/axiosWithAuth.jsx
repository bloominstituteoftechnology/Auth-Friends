import axios from "axios";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    // configuration object
    baseURL: "http://localhost:5000/api", // access the env variable
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;