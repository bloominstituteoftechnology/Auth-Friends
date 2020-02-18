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
			<p>You do not have the backend this isn't going to work...I published without thinking... </p>
		</section>
	);
};

export default ReadMe;
