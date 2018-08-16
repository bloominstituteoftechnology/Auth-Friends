import React from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../store/actions'


class UpdateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    updateFriend = (event) => {
        event.preventDefault();
        this.props.updateFriend(this.props.id, this.state.name, this.state.age, this.state.email);
        this.forceUpdate();
    }

    render() {
        return (
            <div className={"updateForm " + (this.props.hidden ? "" : "updateShow")}>
                <h4>Update this friend.</h4>
                <form onSubmit={this.updateFriend}>
                    <input type="text" name="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name}/>
                    <input type="number" name="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age}/>
                    <input type="email" name="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { updateFriend })(UpdateFriendForm);