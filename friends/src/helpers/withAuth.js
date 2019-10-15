import React from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';

export const asAxios = () => {
	const token = localStorage.getItem('login_token');
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `${token}`,
		},
	});
};

export const asRoute = ({ component: Component, props = {}, ...rest }) => (
	<Route
		{...rest}
		render={routeProps =>
			localStorage.getItem('login_token') ? (
				<Component {...routeProps} {...props} />
			) : (
				<Redirect to="/" />
			)
		}
	/>
);
export const isLoggedIn = () => localStorage.getItem('login_token') ? true : false;