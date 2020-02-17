import React from "react";

const info = {
	color: "#77ad17",
	textShadow: "-1px 0 darkgreen, 0 1px darkgreen, 1px 0 darkgreen, 0 -1px darkgreen",
};

const ReadMe = () => {
	const password = () => {
		return `i<3Lambd4`;
	};
	console.log(password);
	return (
		<section style={info}>
			<p>You need to use this username and password</p>
			<h4>UserName: Lambda School</h4>
			<h4>Password: {password()} </h4>
		</section>
	);
};

export default ReadMe;
