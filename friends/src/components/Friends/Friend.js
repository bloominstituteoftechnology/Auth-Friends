import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchFriend, deleteFriend } from '../../actions';

class Friend extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchFriend(id);
    }

    deleteFriend = () => {
        const friend = this.props.friend;
        console.log("here " , friend);
        this.props.deleteFriend(friend);
    }


    render() { 
        {console.log("render", this.props)}
        return this.props.deletingFriend ? (
            <Redirect to="/search"/>
        ) : (
            this.props.friendFetched ?
            <div className="card">
                <FriendCard friend={this.props.friend}/>
                <button className="delete" 
                    onClick={this.deleteFriend}>Delete from Friends
                </button>
            </div> : null
        )
    }
}
 
const mapDispatchToProps = state => {
    const  friendReducer = state.friendReducer;
    return friendReducer;
  };
  
export default connect(mapDispatchToProps, { fetchFriend, deleteFriend })(Friend);