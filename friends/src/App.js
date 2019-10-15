import React from 'react';
import * as withAuth from './helpers/withAuth';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';

export const App = () => {
	return (
		<div className="inner">
			<Route path="/" render={
				props => <Login {...props} />
			} />
			<withAuth.asRoute path="/friends" component={Friends} />
		</div>
	);
}

export default App;
