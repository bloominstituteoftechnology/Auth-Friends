import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createFriend} from '../actions';

class FriendForm extends Component {
    constructor() {
        super();
        this.state= {
            name: '',
            age: '',
            email: ''
        };
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleAddFriend = friend => {
        
    }



}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingFriend: state.creatingFriend
    }
}

export default connect(mapStateToProps, {createFriend})(FriendForm);