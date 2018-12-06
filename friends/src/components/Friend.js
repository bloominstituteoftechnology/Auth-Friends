import React from "react";

class Friend extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: 0,
			location: "",
			bestFriend: false,
		};
	}
}

export default Friend;
