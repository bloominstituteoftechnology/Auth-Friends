import React, { Component } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
	margin-top: 10px;
	width: 97%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${props => props.inputColor};
	padding: 10px;
	text-align: center;

	input {
		width: 90%;
		margin: 0 auto;
		margin-bottom: 5px;
	}

	button {
		margin: 10px;
		width: 60%;
	}
`;

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: `${this.props.edit ? this.props.data.name : ""}`,
			age: `${this.props.edit ? this.props.data.age : 21}`,
			email: `${this.props.edit ? this.props.data.email : ""}`
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	submitHandler = event => {
		event.preventDefault();
		if (this.props.edit) {
			this.props.editFriend(this.state, this.props.data.id);
			this.props.history.push("/");
		} else {
			this.props.addFriend(this.state);
			this.resetState();
		}
	};

	resetState = () => {
		this.setState({
			name: "",
			age: 21,
			email: ""
		});
	};

	render() {
		return (
			<FormWrapper
				inputColor={this.props.inputColor}
				onSubmit={this.submitHandler}>
				<h3>{this.props.title}</h3>
				<input
					type='text'
					name='name'
					placeholder='Name'
					onChange={this.handleChange}
					value={this.state.name}
				/>
				<input
					type='number'
					min='21'
					max='120'
					name='age'
					placeholder='Age'
					onChange={this.handleChange}
					value={this.state.age}
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={this.handleChange}
					value={this.state.email}
				/>
				<button type='submit'>{this.props.buttonText}</button>
			</FormWrapper>
		);
	}
}

export default Form;