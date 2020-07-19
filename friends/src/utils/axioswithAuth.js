import Axios from "axios";

const baseURL = "http://localhost:5000";

export const axioswithAuth = () => {
    const token = localStorage.getItem("token");
    return Axios.create({
      baseURL,
      headers: {
        Authorization: token,
      },
    });
}

export const axios = Axios.create({baseURL});