import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from '../../logo.svg';

import {getFriends} from '../../actions';

class Cards extends Component {
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        console.log("this.props.state",this.props.state);
        const state = this.props.state;
        const {fetchingFriends} = state;
        return (
            <React.Fragment>
                {fetchingFriends ? (<div><img src={logo} className="App-logo" alt="logo" /><div>Fetchiung friends</div></div>) : null}
                <div>Hello form Cards</div>
            </React.Fragment>
        );
    }
}
const stateToProps = state => {
    return {
        state: state.friendsReducer
    }
}
export default connect(stateToProps, {getFriends})(Cards);