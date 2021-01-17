import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('token')) {
					console.log('Token found, rendering component');
					return <Component {...props} />;
				} else {
					console.log('token not found, redirect to login');
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
}

export default PrivateRoute;
