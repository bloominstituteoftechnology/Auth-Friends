import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FriendsForm } from '../components/FriendsForm/';
import { FriendsList } from '../components/FriendsList/';
import { postFriend, getFriends, putFriend, deleteFriend } from '../store/actions/';

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
        }
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(this.state.friend.name && this.state.friend.age && this.state.friend.email) {
            // some action creator action creator action creator action.....
            if(this.state.friend.id === -1) {
                this.props.postFriend( {name: this.state.friend.name, age: this.state.friend.age, email: this.state.friend.email} );
            } else {
                this.props.putFriend( this.state.friend );
            }
            // reset component state
            this.resetCompState();
        }
    };

    editHandler = (editFriend) => {
        // something something something
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.setState({
            ...this.state,
            friend: {
                id: editFriend.id,
                name: editFriend.name,
                age: editFriend.age,
                email: editFriend.email
            }
        });
    }

    render() {
        return (
            <Fragment>
                <FriendsForm friend={this.state.friend} inputHandler={this.inputHandler} submitHandler={this.submitHandler} />
                <FriendsList 
                    friends={this.props.friends} 
                    editHandler={this.editHandler} 
                    gettingFriends={this.props.gettingFriends} 
                    // gettingSingleFriend={this.props.gettingSingleFriend} 
                    postingFriend={this.props.postingFriend} 
                    puttingFriend={this.props.puttingFriend} 
                    deletingFriend={this.props.deletingFriend} 
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
    gettingFriends: PropTypes.bool,
    // gettingSingleFriend: PropTypes.bool,
    postingFriend: PropTypes.bool,
    puttingFriend: PropTypes.bool,
    deletingFriend: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        friends: state.crudReducers.friends,
        gettingFriends: state.crudReducers.gettingFriends,
        // gettingSingleFriend: state.crudReducers.gettingSingleFriend,
        postingFriend: state.crudReducers.postingFriend,
        puttingFriend: state.crudReducers.puttingFriend,
        deletingFriend: state.crudReducers.deletingFriend
    };
};

export default connect(mapStateToProps, { postFriend, getFriends, putFriend, deleteFriend })(FriendsContainer);
