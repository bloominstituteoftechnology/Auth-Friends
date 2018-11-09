import React from 'react';
import {connect} from 'react-redux';

import {addFriend, updateFriend} from '../../actions/index';

class EditFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            email: '',
        }
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.props.type === 'Add Friend') {
            // add a friend
            this.props.addFriend(this.state);
        }
        else {
            // update the friend
            this.props.updateFriend(this.props.id, this.state);
        }
        this.setState({
            name: '',
            age: null,
            email: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input name='name' value={this.state.name} placeholder='Name' onChange={this.valueChange}/>
                <input name='email' value={this.state.email} placeholder='Email' onChange={this.valueChange}/>
                <button type='submit'>{this.props.type}</button>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, {addFriend, updateFriend})(EditFriend);