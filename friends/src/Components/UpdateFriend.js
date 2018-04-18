import React from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../Actions/Index.js';

class changeFriend extends React.Component {
    state ={
        Inputs: {
            name: '',
            age: '',
            email: '',
            edit: true,
        },
        id: 0,
    }
    handelInputChange = (event) => {
        const { name, value } = event.target;
        const inputs = this.state.Inputs;
        input[name] = value;
        this.setState({ Inputs: inputs });
    }
    handleSubmit = (event) => 
}