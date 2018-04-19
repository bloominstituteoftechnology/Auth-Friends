import React, { Component } from 'react';

const idStyle = {
	fontWeight: 'bold'
};
class FriendEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Name: '',
			Email: '',
			Age: ''
			// showUpdateNote: false
		};
	}
	render() {
        const { id, name, age, email } = this.props.friend;
		return (
			<div>
				<li>
					<span style={idStyle}>Name: </span>
					{name}
				</li>
				<li>
					<span style={idStyle}>Age: </span>
					{age}
				</li>
				<li>
					<span style={idStyle}>Email: </span>
					{email}
				</li>
			</div>
		);
	}
}
export default FriendEdit;
