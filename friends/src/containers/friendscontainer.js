import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FriendsForm from '../components/FriendsForm/';
import FriendsList from '../components/FriendsList/';
import { postFriend, getFriends } from '../store/actions/';

class FriendsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //some input fields or something
        };
    };

    componentDidMount() {
        // this.props.getFriends();
    };

    inputHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        // some action creator
        // reset component state
    }

    render() {
        return (
            <Fragment>
                <FriendsForm inputHandler={this.inputHandler} submitHandler={this.submitHandler} />
                <FriendsList friends={this.props.friends} />
            </Fragment>
        )
    };

};

FriendsContainer.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    }))
};

const mapStateToProps = (state) => {
    return {
        // friends: state.crudReducers.friends
    };
};

export default connect(mapStateToProps, {postFriend, getFriends})(FriendsContainer);
