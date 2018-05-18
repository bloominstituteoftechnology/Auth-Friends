import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';

class Friends extends Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return (
            <div>friend</div>
        )
    }
}

export default connect(null, { fetchFriends })(Friends);