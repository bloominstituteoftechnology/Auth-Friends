import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FriendsForm } from '../components/FriendsForm/';
import { FriendsList } from '../components/FriendsList/';
import { postFriend, getFriends,/* getSingleFriend,*/ putFriend, deleteFriend } from '../store/actions/';

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
        this.props.getFriends();
    };

    resetCompState = () => {
        this.setState({
            ...this.state,
            friend: {
                id: -1,
                name: '',
                age: '',
                email: ''
            }
        });
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
        };
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(this.state.friend.name && this.state.friend.age && this.state.friend.email) {
            // some action creator action creator action creator action.....
            if(this.state.friend.id === -1) {
                const newFriend = {name: this.state.friend.name, age: this.state.friend.age, email: this.state.friend.email};
                this.props.postFriend( newFriend );
            } else {
                this.props.putFriend( this.state.friend );
            };
            // reset component state
            this.resetCompState();
        };
    };

    editHandler = (editFriend) => {
        // something something something
        this.setState({
            ...this.state,
            friend: editFriend
        });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

    render() {
        return (
            <Fragment>
                <FriendsForm 
                    friend={this.state.friend} 
                    inputHandler={this.inputHandler} 
                    submitHandler={this.submitHandler} 
                />
                <FriendsList 
                    friends={this.props.friends} 
                    editHandler={this.editHandler} 
                    deleteFriend={this.props.deleteFriend} 
                    crudStates={this.props.crudStates} 
                />
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
    crudStates: PropTypes.shape({
        postingFriend: PropTypes.bool,
        postedFriend: PropTypes.bool, 
        gettingFriends: PropTypes.bool,
        gotFriends: PropTypes.bool, 
        // gettingSingleFriend: PropTypes.bool,
        // gotSingleFriend: PropTypes.bool, 
        puttingFriend: PropTypes.bool,
        putFriend: PropTypes.bool, 
        deletingFriend: PropTypes.bool,
        deletedFriend: PropTypes.bool, 
        crudError: PropTypes.string
    }), 
    postFriend: PropTypes.func, 
    getFriends: PropTypes.func, 
    // getSingleFriend: PropTypes.func, 
    putFriend: PropTypes.func, 
    deleteFriend: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        friends: state.crudReducers.friends,
        crudStates: state.crudReducers.crudStates
    };
};

export default connect(mapStateToProps, { postFriend, getFriends,/* getSingleFriend,*/ putFriend, deleteFriend })(FriendsContainer);
