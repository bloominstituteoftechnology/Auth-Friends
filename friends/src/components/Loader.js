import React from 'react';

import '../styles/Loader.css';

export default function Loader(props) {
	const isLoading = () => {
		props.isLoading();
	};

	const isLoaded = () => {
		props.isLoaded();
	};

	// {isLoading() ? (
	// 	<div className="LoadingScreen">
	// 		<div className="StatusMessage">STATUS: LOADING FRIENDS....</div>
	// 	</div>
	// ) : (
	// 	<div>isLoading false</div>
	// )}
	// {isLoaded() ? (
	// 	<div className="LoadingScreen">
	// 		<div className="StatusMessage">STATUS: FRIENDS LOADED</div>
	// 	</div>
	// ) : (
	// 	<div>isloaded false</div>
	// )}

	return (
		<div className="Loader">
			{!props.status ? (
				<div className="LoadingScreen">
					<div className="StatusMessage">STATUS: OK</div>
				</div>
			) : (
				<div className="LoadingScreen">
					<div className="StatusMessage">{`STATUS: ${props.status}`}</div>
				</div>
			)}
		</div>
	);
}
