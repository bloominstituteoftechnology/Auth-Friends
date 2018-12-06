import React, { Component } from 'react';
import { Form, Input, Button, H3 } from '../styles';

class FriendForm extends Component {
	handleMode = () => {
		if (this.props.mode === 'Update') {
			return this.props.updateFriend;
		} else {
			return this.props.addFriend;
		}
	};

	render() {
		return (
			<Form mode={this.props.mode} onSubmit={this.handleMode()}>
				<Input
					required
					placeholder="Name..."
					name="name"
					type="text"
					value={this.props.name}
					onChange={this.props.handleChange}
				/>
				<Input
					required
					placeholder="Age..."
					name="age"
					type="text"
					value={this.props.age}
					onChange={this.props.handleChange}
				/>
				<Input
					required
					placeholder="Email..."
					name="email"
					type="text"
					value={this.props.email}
					onChange={this.props.handleChange}
				/>
				<Button>{this.props.mode}</Button>
				<H3
					mode={this.props.mode}
					selected={this.props.selected}
					onClick={() => this.props.toggleSelected(this.props.index)}
				>
					Cancel
				</H3>
			</Form>
		);
	}
}
export default FriendForm;
