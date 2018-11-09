import React from 'react';
import {connect} from 'react-redux';

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

    }

    submitForm = () => {

    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input name='name' />
                <input name='email' />
                <button type='submit'>{this.props.type}</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(EditFriend);