import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchFriends } from '../store/actions';

import Friends from '../components/Friends';
import CreateFriendForm from '../components/CreateFriendForm';

class FriendContainer extends React.Component {
    state = {
        nameInput: '',
        ageInput: 0,
        emailInput: '',
    };
    componentDidMount = () => {
        this.props.fetchFriends();
    }
    handleChange = event => this.setState({ [event.target.name]: event.target.value });

    addFriend = event => {
        event.preventDefault();
        
    };

    render() {
        return (
            <Fragment>
            <div>
            <Friends 
                friends={this.props.friends}

            />
            </div>
            <div>
            <CreateFriendForm
            handleChange={this.handleChange}

            />
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStateToProps, { fetchFriends })(FriendContainer);