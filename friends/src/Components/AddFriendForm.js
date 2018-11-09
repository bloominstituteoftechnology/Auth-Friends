import React from 'react';
import { connect } from 'react-redux';
import addFriend from '../Actions/index';

class AddFriendForm extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h1>Create a friend!</h1>
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

export default connect(mstp, { addFriend })(AddFriendForm);