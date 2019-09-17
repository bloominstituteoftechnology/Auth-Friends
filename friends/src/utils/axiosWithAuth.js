import axios from 'axios';

const axiosWithAuth = () => {
	// Create a token to be used
	const token = localStorage.getItem('token');

	// New axios instance
	return axios.create({
		baseURL: "http://localhost:5000/api",
		headers: {
			Authorization: token
		}
	});
}

export default axiosWithAuth;