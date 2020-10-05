import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("item");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
