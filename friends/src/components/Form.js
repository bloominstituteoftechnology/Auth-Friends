import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    render() {
        return (
            <div>
                <form>
                    <label>Name: </label>
                    <input 
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    />
                    <label>Age: </label>
                    <input 
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleInputChange}
                    />
                    <label>Email: </label>
                    <input 
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />
                    <button type="submit">Add Friend</button>
                </form>
                
            </div>
        )
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type === 'number') {
            value = Number(value);
        };

        this.setState( { [name]: value } )
    }
}

export default Form;