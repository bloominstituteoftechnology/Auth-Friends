import React, { Component } from 'react';

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data.name,
            age: this.props.data.age,
            email: this.props.data.email
        }
    }

    handleUpdate = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }
    render() {
        return (
            <form>
                <input placholder="name" name="name" value={this.state.name} onChange={this.handleUpdate} />
                <input placholder="age" name="age" value={this.state.age} onChange={this.handleUpdate} />
                <input placholder="email" name="email" value={this.state.email} onChange={this.handleUpdate} />
                <button>save</button>
            </form>
        );
    }
}

export default UpdateFriend;