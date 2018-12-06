// import React from "react";
import { connect } from "react-redux";
import { fetch_friends } from '../actions';
import React, { Component } from 'react';

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
        console.log("CHANGE")
        return (
            <div>
                Heyyy
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state from mapState...', state)
    return {
    };
}

export default connect(
    mapStateToProps, 
    {
        fetch_friends
    }
)(FriendsComp);