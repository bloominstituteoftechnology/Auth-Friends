import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FriendsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //some input fields or something
        };
    };

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        // some action creator
        // reset component state
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor='input1'>Input1</label>
                <input name='input1' type='text' placeholder='Input1' onChange={this.inputHandler} />
                <input type='submit' value='Add Friend' />
            </form>
        );
    };
};

FriendsForm.propTypes = {};

export default FriendsForm;