import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FriendsForm from '../components/friendsform';
import FriendsList from '../components/friendslist';
import { postFriend, getFriends } from '../store/actions/';

const FriendsContainer = (props) => {
    return (
        <Fragment>
            <FriendsForm />
            <FriendsList />
        </Fragment>
    );
};

FriendsContainer.propTypes = {};

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {postFriend, getFriends})(FriendsContainer);
