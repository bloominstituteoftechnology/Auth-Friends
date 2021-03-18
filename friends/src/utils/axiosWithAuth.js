import axios from "axios";

export const axiosWithAuth = () => {
  //console.log('axiosWithAuth Started')
  const token = localStorage.getItem("authToken");
  //console.log(token)
  return axios.create(
  
    {
    baseURL: "http://localhost:5000/api",
    headers: { Authorization: token }
   
  });
}