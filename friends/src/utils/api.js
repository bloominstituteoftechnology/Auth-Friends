import axios from 'axios';

export default function api(){
	return axios.create({
		baseURL: "http://localhost:5000/api",
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	})

}

