import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FriendsForm } from '../components/FriendsForm/';
import { FriendsList } from '../components/FriendsList/';
import { postFriend, getFriends } from '../store/actions/';

class FriendsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                id: -1,
                name: '',
                age: '',
                email: ''
            }
        };
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.props.getFriends();
    };

    inputHandler = (event) => {
        if(event.target.name === 'age') {
            this.setState({
                ...this.state,
                friend: {
                    ...this.state.friend,
                    [event.target.name]: Number(event.target.value)
                }
            });
        } else {
            this.setState({
                ...this.state,
                friend: {
                    ...this.state.friend,
                    [event.target.name]: event.target.value.toString()
                }
            });
        }
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log('submitHandler');
        if(this.state.friend.name && this.state.friend.age && this.state.friend.email) {
            console.log('state fields filled in');
            // some action creator
            if(this.state.friend.id === -1) {
                this.props.postFriend( {name: this.state.friend.name, age: this.state.friend.age, email: this.state.friend.email} );
            } else {
                this.props.putFriend( this.state.friend );
            }
            // reset component state
            this.setState({
                friend: {
                    id: -1,
                    name: '',
                    age: 0,
                    email: ''
                }
            });
        }
    };

    render() {
        return (
            <Fragment>
                <FriendsForm friend={this.state.friend} inputHandler={this.inputHandler} submitHandler={this.submitHandler} />
                <FriendsList friends={this.props.friends} gettingFriends={this.props.gettingFriends} />
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
    })),
    gettingFriends: PropTypes.bool,
    // gettingSingleFriend: PropTypes.bool,
    postingFriend: PropTypes.bool,
    puttingFriend: PropTypes.bool,
    deletingFriend: PropTypes.bool
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state);
    return {
        friends: state.crudReducers.friends,
        gettingFriends: state.crudReducers.gettingFriends,
        // gettingSingleFriend: state.crudReducers.gettingSingleFriend,
        postingFriend: state.crudReducers.postingFriend,
        puttingFriend: state.crudReducers.puttingFriend,
        deletingFriend: state.crudReducers.deletingFriend
    };
};

export default connect(mapStateToProps, {postFriend, getFriends})(FriendsContainer);
