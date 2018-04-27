import React, { Component } from "react";
import { updateFriend } from '../actions';
import { connect } from 'react-redux';

class UpdateFriend extends Component{
    constructor(props){
        super(props);
        const { friend } = props;
        this.state = {
            name: friend.name,
            age: friend.age,
            email: friend.email,
            id: friend.id
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitForm = e => {
        const { name, age, email, id } = this.state;
        e.preventDefault();
        this.props.updateFriend({ name, email, age: Number(age), id });
        this.setState({ name: "", age: "", email: "" });
    };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                />
                <input
                    type="text"
                    onChange={this.handleChange}
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                />
                <input
                    type="text"
                    onChange={this.handleChange}
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                />
                <button type="submit">Update Friend</button>
            </form>
        );
    }
}
const mapStateToProps = state => {
    return {
        friend: state.friend
    };
};
export default connect(mapStateToProps, { updateFriend })(UpdateFriend);
