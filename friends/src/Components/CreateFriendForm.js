import React, { Component } from 'react';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    updateInputState = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        onChange={this.updateInputState}
                        type='text'
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                    />
                    <input 
                        onChange={this.updateInputState}
                        type='number'
                        placeholder='age'
                        name='age'
                        value={this.state.age}
                    />
                    <input 
                        onChange={this.updateInputState}
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                    />
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default CreateFriendForm;

