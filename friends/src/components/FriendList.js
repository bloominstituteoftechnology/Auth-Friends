import React from "react";
import { connect } from "react-redux";
import { fetch } from '../actions';
import Friend from './Friend';

class FriendList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetch()
    }

    render() {
        if (this.props.fetchingFriends) {
            return <div className='loading'>Friends loading...</div>
        }
        return (
            <div className="friend-list">Friend List
                {this.props.friends.map(friend => {
                    return (
                        <Friend friend={friend}/>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    };
};

export default connect(mapStateToProps, { fetch })(FriendList);