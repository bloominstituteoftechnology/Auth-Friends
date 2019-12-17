import axios from "axios";

export const authAxios = () => {
	const token = window.localStorage.getItem("friendsToken");
	return axios.create({
		baseURL: 'http://localhost:5000/api',
		headers: {
			Authorization: token
		}
	})
}