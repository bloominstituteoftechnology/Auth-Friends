import React from 'react';

class UpdateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email,
            age: this.props.age
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    editFriend = () => {
        
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()} >
                <input onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <input onChange={this.handleInput} value={this.state.email} type='text' name='email' placeholder='email' />
                <input onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <button onClick={this.addFriend}>Save</button>
            </form >
        );
    }
}

export default UpdateFriendForm;