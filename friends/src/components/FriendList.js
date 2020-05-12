import React from "react";
import axios from "axios";
export default class FriendList extends React.Component {
	state = {
		friends: [],
	};

	componentDidMount() {
		axios.get(`http://localhost:5000`).then((res) => {
			console.log(res);
			this.setState({ persons: res.data });
		});
	}
}
