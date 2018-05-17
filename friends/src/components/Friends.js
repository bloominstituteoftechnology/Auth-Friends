import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import logo from '../logo.svg';
import Friend from './Friend';

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        }
    }

    componentDidMount() {
        console.log("props before fetching: ", this.props)
        this.props.fetchFriends();
        console.log("props after fetching: ", this.props)
    }
    
    render() { 
        return (
            <div className="friends-list">
                {this.props.friends.map( friend => {
                    return (
                        this.props.deleting ? (
                            <span>Deleting</span>
                        ) : (
                        <Friend key={friend.id} friend={friend}/>
                        )
                    )
                })}
                {this.props.fetching ? 
                    <img src={logo} className="App-logo" alt="logo" /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state);
    //console.log(this.props);
    return {
        friends: state.friends,
        fetching: state.fetching,
        fetched: state.fetched,
        deleting: state.deleting,
        deleted: state.deleted,
        error: state.error
    };
}
 
export default connect(mapStateToProps, { fetchFriends })(Friends);