import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { FriendList, FriendsForm } from '../components/index';
import { getFriends } from '../actions';



class FriendsListView extends Component {


    componentDidMount() {
        this.props.getFriends();
    }

    render() {

        return (

            <div>
                <FriendList friends={this.props.friends} />
                <FriendsForm />
            </div>

        );
    };
};


const mapStateToProps = state => {
    console.log('THIS IS STATE', state);
    return {
        friends: state.friendsReducer.friends,
        error: state.friendsReducer.error,
        gettingFriends: state.friendsReducer.gettingFriends,
    };
};


export default connect(mapStateToProps, { getFriends })(FriendsListView);