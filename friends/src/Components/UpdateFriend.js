import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../Actions'

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

    submitUpdate = (event) => {
        event.preventDefault();
        const update = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.updateFriend(update);
        console.log(update);
    }
    render() {
        return (
            <form>
                <input placholder="name" name="name" value={this.state.name} onChange={this.handleUpdate} />
                <input placholder="age" name="age" value={this.state.age} onChange={this.handleUpdate} />
                <input placholder="email" name="email" value={this.state.email} onChange={this.handleUpdate} />
                <button onClick={this.submitUpdate}>save</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        friendUpdated: state.friendUpdated
    }
}
export default connect(mapStateToProps, { updateFriend })(UpdateFriend)