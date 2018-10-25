import React from 'react';
import { connect } from 'redux';

import FriendList from './FriendList';
import getFriends from '../Actions';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        if (this.props.fetchingFriends) {
            <h3>Relax... we're fetching your friends.</h3>
        }
        return (
            <div className="CreateFriendForm_wrapper">
                <input
                    type="text"
                    name="name"
                />

                <button>Add Friend</button>
            </div>
        )
    };
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.props.friends,
        //etc
    }
}

export default connect(
    mapStateToProps, 
    { getFriends }
)(CreateFriendForm);