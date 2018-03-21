import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class Friends extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.fetchingFriends ? (
                <h1> FETCHING </h1>
                ) : (
                <ul>
                    {this.props.friends.map(friend => {
                    return <li key={`${friend.name}${friend.id}`}>{friend.name}</li>;
                    })}
                </ul>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      fetchingFriends: state.fetchingFriends,
      friends: state.friends,
      error: state.errorMessage,
    };
};

export default connect(mapStateToProps, { getFriends })(Friends);