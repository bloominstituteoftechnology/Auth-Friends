import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';


class FriendsForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };


    handleAddFriend = event => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.addFriend(friend);
        this.setState({ name: '', age: '', email: '' });
    }

    render() {
        return (
            <form>
                <input
                    value={this.state.name}
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={this.handleChange}
                />
                <input
                    value={this.state.age}
                    name='age'
                    type='text'
                    placeholder='age'
                    onChange={this.handleChange}
                />
                <input
                    value={this.state.email}
                    name='email'
                    type='text'
                    placeholder='email'
                    onChange={this.handleChange}
                />
                <button onClick={this.handleAddFriend}>Add friend</button>

            </form>
        )
    }

}

const mapStateToProps = state => {
    console.log("STATE", state);
    return {
        addingFriend: state.addingFriend
    };
};


export default connect(mapStateToProps, { addFriend })(FriendsForm);