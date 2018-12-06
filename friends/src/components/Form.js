import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

const FormContainerDiv = styled.div`
    background-color: #FFF;
    width: 100%;
    border: 1px solid gray;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 1rem;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

const FormInput = styled.input`
    margin: 1rem;
    padding: .5rem;
    width: 200px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid lightgray;
    &:focus {
        outline: none;
    }
`

const FormButton = styled.button`
    margin: 1rem;
    padding: .5rem;
    width: 120px;
    background-color: #666;
    color: #FFF;
    border: none;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

export default function Form(props) {
	return (
		<FormContainerDiv>
            <Route
                exact path="/"
                location={props.location}
                render={routerProps => 
                <AddFriendForm 
                    {...routerProps} 
                    addFriend={props.addFriend} 
                />} 
            />
            <Route
                history={props.history}
                exact path="/:id"
                render={routerProps =>
                <EditFriendForm
                    {...routerProps}
                    editFriend={props.editFriend}
                />}
            />
		</FormContainerDiv>
	);
}

class AddFriendForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nameInput: '',
			ageInput: '',
			email: '',
		};
	}

	changeHandler = e => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.addFriend(this.state);
		this.setState({
            nameInput: '',
            ageInput: '',
            emailInput: '',
        });
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<FormInput
					type="text"
					name="nameInput"
					placeholder="Name"
					value={this.state.nameInput}
					onChange={this.changeHandler}
				/>
				<FormInput
					type="text"
					name="ageInput"
					placeholder="Age"
					value={this.state.ageInput}
					onChange={this.changeHandler}
				/>
				<FormInput
					type="text"
					name="emailInput"
					placeholder="Email"
					value={this.state.emailInput}
					onChange={this.changeHandler}
				/>
				<FormButton type="submit">Add Friend</FormButton>
			</form>
        );
    }
    
}

class EditFriendForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nameInput: '',
			ageInput: '',
			email: '',
		};
	}

	changeHandler = e => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.editFriend(this.state, this.props.match.params.id);
		this.setState({
            nameInput: '',
            ageInput: '',
            emailInput: '',
        });
        this.props.history.push('/');
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<FormInput
					type="text"
					name="nameInput"
					placeholder="Name"
					value={this.state.nameInput}
					onChange={this.changeHandler}
				/>
				<FormInput
					type="text"
					name="ageInput"
					placeholder="Age"
					value={this.state.ageInput}
					onChange={this.changeHandler}
				/>
				<FormInput
					type="text"
					name="emailInput"
					placeholder="Email"
					value={this.state.emailInput}
					onChange={this.changeHandler}
				/>
				<FormButton type="submit">Update Friend</FormButton>
			</form>
		);
    }
    
}