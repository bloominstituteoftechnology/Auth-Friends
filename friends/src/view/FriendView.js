import React, { Component } from 'react';
import  { connect } from 'react-redux';
import FriendForm from '../components/FriendForm/FriendForm.js';
import Friends from '../components/Friends/Friends.js';
import { addingFriends, removeFriend } from '../actions';

class FriendView extends Component {
    state = {
        name:'',
        email: '',
        age: '',
    };
    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    adddingFriends = event => {
        event.preventDefault();
        const {}
    }
}