import React from 'react';

class SubmitNewFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addNewFriend(this.state);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input onChange={this.handleChange} name="name" placeholder="name" value={this.state.name} type="text" />
                <input onChange={this.handleChange} name="age" placeholder="age" value={this.state.age} type="number" />
                <input onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} type="email" />
                <button>Add Friend</button>
            </form>
        )
    }
}

export default SubmitNewFriend;