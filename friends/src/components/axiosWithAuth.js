import Axios from "axios";

const axioswithAuth = () => {
  const token = localStorage.getItem("token");
  return Axios.create({
    headers: { authorization: token },
    baseURL: "http://localhost:5000/api"
  });
};

export default axioswithAuth;
