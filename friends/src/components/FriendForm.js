import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createFriend} from '../actions';

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        Occupation: ''
    };
    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value });
    };

    handleAddFriend = _ => {
    const {name, age, occupation} = this.state;
    this.props.createFriend({name, age, occupation});
    this.setState({name: '', age: '', occupation: ''});
    };

    render() {
        return(
            <form>
                <input
                className="input"
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                />
                <input
                className="input"
                value={this.state.age}
                name="age"
                type="text"
                placeholder="Age"
                onChange={this.handleInputChange}
                />
                <input
                className="input"
                value={this.state.occupation}
                name="occupation"
                type="text"
                placeholder="Occupation"
                onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddFriend()} type="button">
                Add Friend
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingFriend: state.creatingFriend
    };
};

export default connect(mapStateToProps, {createFriend})(FriendForm);