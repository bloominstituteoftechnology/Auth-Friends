import React, { Component } from 'react';
import { fetchData } from '../actions';
import { addData } from '../actions';
import { connect } from 'react-redux';
import './Friends.css';

class FriendsForm extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Friends Form',
            name: '',
            age: 0,
            email: ''
        }
    }

    componentDidMount() {
        this.props.fetchData();
    }

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addFriend = () => {
        this.props.addData({ id: this.props.friends.length+1, name: this.state.name, age: this.state.age, email: this.state.email });
        this.setState({ name: '', age: 0, email: '' });
    }

    render() {
        return (
            <div className="form">
                <h3>{this.state.title}</h3>
                <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleOnChange} /><br />
                <input type="number" min="1" name="age" value={this.state.age} placeholder="Age" onChange={this.handleOnChange} /><br />
                <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleOnChange} /><br />
                <button onClick={this.addFriend}>Add New Friend</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            friends: state.friendsReducer.friends,
        }
    )
}

export default connect(mapStateToProps, { fetchData, addData })(FriendsForm); 