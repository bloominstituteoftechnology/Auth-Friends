
//-- Dependencies --------------------------------
import React from "react";

//-- Lifecycle -----------------------------------
export default class extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            age: null,
            email: ''
        }    
    }

//-- Rendering -----------------------------------
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                />
                <input
                    type="number"
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.age}
                    name="age"
                />
                <input
                    type="email"
                    onChange={this.handleInputChange}
                    placeholder="email"
                    value={this.state.email}
                    name="email"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

//-- Interaction ---------------------------------
    handleInputChange = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value 
        });
    }
    handleSubmit = submitEvent => {
        submitEvent.preventDefault();
        let friendData = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
        };
        this.clearState();
        this.props.onSubmit(friendData);
    }

//-- Utility Methods -----------------------------
    clearState() {
        this.setState({
            name: '',
            age: null,
            email: '',
        });
    }
}