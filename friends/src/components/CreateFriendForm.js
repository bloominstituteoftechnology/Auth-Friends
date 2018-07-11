import React from 'react';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <input onChange={this.handleInput} value={this.state.email} type='text' name='email' placeholder='email' />
                <input onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <button>Add Friend</button>
            </form>
        );
    }
}

export default CreateFriendForm;