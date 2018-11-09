import React, {Component} from 'react';
import {connect} from 'react-redux';
import {friend} from './friend';
import {getFriends} from './actions';

class FriendsList extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getFriends();
    }

    render(){
        return (
            <div>
                {this.props.loading ? <h1>Finding friends</h1> : null}
                {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
                {this.props.friends.map(friend =>
                     <Friend friend={friend} key={friend.id}/>)}
            </div>
        )
    }
}