import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: 'http://localhost:5020',
    headers: { Authorization: token },
  });
};

// export default AxiosWithAuth;