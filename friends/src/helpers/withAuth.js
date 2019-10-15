import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `${token}`,
		},
	});
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem("token") ? (
				<Component {...props} />
			) : (
				<Redirect to="/" />
			)
		}
	/>
);