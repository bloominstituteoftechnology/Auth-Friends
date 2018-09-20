import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addNewFriend } from '../actions';

class FriendForm extends React.Component {
    state = {
           name: '',
           age: '',
           email: ''
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    handleAddNewFriend = () => {
        const friend = this.state;
        this.props.addNewFriend(friend);
        this.setState({ name: '', age: '', email: '' });

    }

    render() {
        return (
        <div>
            <input name="name" value={this.state.name} type="text" onChange={this.handleInputChange} placeholder="Name" />
            <input name="age" value={this.state.age} type="number" onChange={this.handleInputChange} placeholder="Age" />
            <input name="email" value={this.state.email} type="email" onChange={this.handleInputChange} placeholder="Email" />

                <button onClick={this.handleAddNewFriend}>Add Friend</button>
        </div>
        );
    }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(mapStateToProps, { addNewFriend })(FriendForm);

