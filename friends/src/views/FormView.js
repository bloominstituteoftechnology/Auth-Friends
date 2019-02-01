import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../store/actions';
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

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.item.name && this.state.item.age && this.state.item.email ) {
            this.props.addFriend(this.state.item)
            this.props.history.push('/api/friends')
        } else {
            alert('Please fill in all of the requirements')
        }
    }
    render() {
        return(
            <FriendForm handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} item={this.state.item}/>
        )
    }
}

export default connect(null, { addFriend })(FormView);