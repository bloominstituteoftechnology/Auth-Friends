import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './Friends.css'
import UpdateFriend from './UpdateFriend'

import { getFriends } from '../Actions';

class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            update: false
        }
    }

    componentDidMount() {
        this.props.getFriends();
    }

    updateToggle = () => {
        const active = this.state.update;
        this.setState({update: !active});
    }

    render() {
        return (
            <div className="App">
                {this.props.friendsFetched ? (
                <div className="FriendList">
                    {this.props.friends.map(friend => {
                    return <div key={friend.email} className="Friend" >
                        <div>{friend.name}</div>
                        <div>Age: {friend.age}</div>
                        <div>Email: {friend.email}</div>
                        <button onClick={this.updateToggle}>Update</button>
                        {this.state.update ? <UpdateFriend data={friend}/> : null}
                    </div>;
                    })}
                </div>
                ) : (
                <img src={logo} className="App-logo" alt="logo" />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        friendsFetched: state.friendsFetched
    }
}

export default connect(mapStateToProps, { getFriends })(Friends)

