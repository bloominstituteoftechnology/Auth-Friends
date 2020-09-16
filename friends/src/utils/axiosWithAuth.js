import axios from "axios";

 const axiosWithAuth = () => {
    // create an instance of axios with a global config setup
    // const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
  };

  export default axiosWithAuth