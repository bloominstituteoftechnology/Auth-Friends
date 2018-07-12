import React, { Component } from 'react';

export class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    handleSubmitFriend = (e) => {
        e.preventDefault();
        const friend = { name: this.state.name, age: this.state.age, email: this.state.email }
        this.props.dataPost(friend);
        this.setState({name: '', age: '', email: ''})
    }
    handleNameChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input
                        className="field"
                        type="text"
                        placeholder="name"
                        name="name"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                    <input
                        className="field"
                        type="number"
                        placeholder="age"
                        name="age"
                        onChange={this.handleNameChange}
                        value={this.state.age}
                    />
                    <input
                        className="field"
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={this.handleNameChange}
                        value={this.state.email}
                    />
                    <button className="field-btn" onClick={this.handleSubmitFriend}>Submit Friend</button>
                </form>
            </div>);
    }
}
