import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../Actions';

class UpdateFriendForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Update a friend</h1>
                <form>
                    <input placeholder='Name' />
                    <input placeholder='Age' />
                    <input placeholder='Email' />
                </form>
            </div>
        )
    }
}

const mstp = state => {
    return {}
}

export default connect(mstp, { updateFriend })(UpdateFriendForm);