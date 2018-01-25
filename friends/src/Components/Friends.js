import React, { Component } from 'react';
import logo from '../logo.svg';
import './Friends.css'
import UpdateFriend from './UpdateFriend'
import { friendsReducer } from '../Reducers/index';

class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            update: false
        }
    }

    updateToggle = () => {
        const active = this.state.update;
        this.setState({update: !active});
    }

    render() {
        return (
            <div className="Friend">
                <div>
                        <div>{this.props.friend.name}</div>
                        <div>Age: {this.props.friend.age}</div>
                        <div>Email: {this.props.friend.email}</div>
                        <button onClick={this.updateToggle}>Update</button>
                        {this.state.update ? <UpdateFriend data={this.props.friend}/> : null}
                </div>

            </div>
        );
    }
}

export default Friends;

