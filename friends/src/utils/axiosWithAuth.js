import axios from "axios";

export const axiosWithAuth = () => axios.create({ headers: { 'Authorization': localStorage.getItem("token") } });