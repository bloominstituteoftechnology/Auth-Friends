import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions/fetchingActions';

class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    changeHandler = event => {
        if (event.target.name === 'age') {
            this.setState({
                [event.target.name]: Number(event.target.value)
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };

    submitHandler = event => {
        event.preventDefault();
        if (this.state.name && this.state.age && this.state.email) {
            //console.log(this.state.name, this.state.age, this.state.email);
            this.props.addFriend({
                name: this.state.name,
                age: Number(this.state.age),
                email: this.state.email,
                id: event.timeStamp
            })
            this.setState({
                name: '',
                age: '',
                email: ''
            })
        }
    };

    render() {
        return (
            <form className="new-friend-form" onSubmit={this.submitHandler}>
                <input type="text" name="name" id="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name} />
                <input type="number" name="age" id="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age} />
                <input type="email" name="email" id="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email} />
                <button type="submit">Add new friend</button>
            </form>
        )
    };
}

const mapStateToProps = state => {
    //console.log('app state: ', state);
    return {
        friends: state.friends,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { addFriend }
)(NewFriendForm);

// export default NewFriendForm;