import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FriendList } from '../components';
import { fetchFriends } from './../actions';
import PropTypes from 'prop-types';
import { FunniesComponent } from 'funnies';

class FriendListView extends Component {
    static propTypes = {
        fetchFriends: PropTypes.func,
        friends: PropTypes.arrayOf(PropTypes.string)
    };
    componentDidMount() {
        console.log('fetching');
        this.props.fetchFriends();
    }
    render() {
        if (this.props.fetchingFriends) {
            return <FunniesComponent />;
        } else if (this.props.friendsFetched) {
            return (
                <div>
                    <FriendList friends={this.props.friends} />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friendsReducer.friends,
        fetchingFriends: state.fetchingFriends,
        friendsFetched: state.friendsFetched
    };
};

const mapDispatchToProps = dispatch => ({
    fetchFriends: () => dispatch(fetchFriends())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendListView);
