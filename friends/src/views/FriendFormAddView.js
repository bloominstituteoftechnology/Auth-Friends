import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewFriend } from '../store/actions';

import FriendFormAdd from '../components/Friends/FriendFormAdd';

class FriendFormAddView extends Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        },
        modal14: false,
    };
    

    // Toggles the modal for confirmation
    toggle = e => {
        console.log(this.state);
        this.setState({
            modal14: !this.state.modal14
        });
    }

    // Handles the input from the inputs in FriendFormAdd.jsx
    handleChange = e => {
        e.preventDefault();

        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value,
            }
        });
    };

    // Handles adding the new friend to the server
    handleAddNewFriend = e => {
        e.preventDefault();

        this.props.addNewFriend(this.state.friend);
    };

    render() {
        return (
            <FriendFormAdd
                {...this.props}
                friend={this.state.friend}
                handleAddNewFriend={this.handleAddNewFriend}
                handleChange={this.handleChange}
                toggle={this.toggle}
                modal14={this.state.modal14}
            />
        );
    };
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { addNewFriend })(FriendFormAddView);