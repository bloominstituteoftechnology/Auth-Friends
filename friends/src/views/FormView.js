import React, { Component } from 'react';

import FriendForm from '../components/FriendForm/FriendForm';

class FormView extends Component {
    state ={
        item: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChanges = e => {
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return(
            <FriendForm handleChanges={this.handleChanges} item={this.state.item}/>
        )
    }
}

export default FormView;