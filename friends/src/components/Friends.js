import React, { Component } from 'react';
import {getFriends} from '../actions/action';
import { connect } from 'react-redux';
import Friend from './Friend';

class Friends extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.friends.map( friend => <Friend key={friend.id} friend={friend} />)}
                {/* <Friend /> */}
            </div>
        );
    }
}

// export default Friends;

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, {getFriends})(Friends)


