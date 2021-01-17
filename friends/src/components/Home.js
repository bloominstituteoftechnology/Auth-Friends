import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home__container">
			<h1>Hello Friend!</h1>
			<p>
				Want to be a friend? Go ahead and <Link to="/login">log in!</Link>
			</p>
		</div>
	);
}

export default Home;
