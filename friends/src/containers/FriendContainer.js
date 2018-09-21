import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchFriends, addFriend } from '../store/actions';

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

    addNewFriend = event => {
        // event.preventDefault();
        const friend = {
            id: this.props.friends.length + 1,
            name: this.state.nameInput,
            age: this.state.ageInput,
            email: this.state.emailInput,

        }
        console.log(friend);
        this.props.addFriend(friend);
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
            addNewFriend={this.addNewFriend}
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

export default connect(mapStateToProps, { fetchFriends, addFriend })(FriendContainer);