import React, { Component } from 'react';
import { createFriend } from '..actions/actions';
import { connect } from 'react-redux';

class CreateFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    };
    handleInput = e => {
        this.setState ({ [e.target.name]: e.target.value });
    };

    
}