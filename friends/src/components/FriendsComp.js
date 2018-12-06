// import React from "react";
import { connect } from "react-redux";
import { fetch_friends } from '../actions';
import React, { Component } from 'react';
import Friend from './Friend';

class FriendsComp extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetch_friends();
    }

    render() {
        // if (this.props.fetching) {
        //     <h2>Loading...</h2>
        // }
        // console.log("CHANGE", this.props)
        return (
            <div>
                {this.props.friends.map(friend => {
                    return <Friend friend={friend}
                    />
                })}
                <form>
                    <input />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('state from mapState...', state)
    return {
        friends: state.friendsReducer.friends,
        fetching: state.friendsReducer.fetching
    };
}

export default connect(
    mapStateToProps, 
    {
        fetch_friends
    }
)(FriendsComp);