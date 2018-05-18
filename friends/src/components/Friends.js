import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

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

const mapStateToProps = state => {
    console.log("Map State:", state);
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    }
}
export default connect(mapStateToProps, { fetchFriends })(Friends);