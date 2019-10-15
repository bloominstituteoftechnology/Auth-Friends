import React, { useState } from 'react';
import * as withAuth from './helpers/withAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';

export const App = () => {
	const [formData, setForm] = useState({ username: "", password: "" });
	const [isLoading, setLoading] = useState(true);
	const onInputChange = e => {
		const newFormState = {
			...formData,
			[e.target.name]: e.target.value
		}
		setForm(newFormState);
	}

	return (
		<Router>
			<div className="inner">
				<Route exact path="/" render={
					props => <Login
						{...props}
						isLoading={isLoading}
						formData={formData}
						setForm={setForm}
						onInputChange={onInputChange} />
				} />
				<withAuth.asRoute path="/friends" component={Friends} />
			</div>
		</Router>
	);
}

export default App;
