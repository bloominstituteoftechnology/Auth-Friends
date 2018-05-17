import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchFriend, deleteFriend } from '../../actions';



class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchFriend(id);
    }

    deleteFriend = () => {
        const friend = this.props.friend;
        console.log("here " , friend);
        this.props.deleteFriend(friend);
    //     axios
    //         .delete(`http://localhost:5000/api/friends/${id}`)
    //         .then(resp => this.setState({deleted: true}))
    //         .catch(err => console.log(err))
    }

    render() { 
        return this.props.friendDeleted ? (
            <Redirect to="/search"/>
        ) : (
            this.props.friendFetched ?
            <div className="card">
                {console.log(this.props.friend)}
                <FriendCard friend={this.props.friend}/>
                <button className="delete" 
                    onClick={this.deleteFriend}>Delete from Friends
                </button>
            </div> : null
        )
    }
}
 
const mapDispatchToProps = state => {
    const { friendReducer } = state;
    return friendReducer;
  };
  
  export default connect(mapDispatchToProps, { fetchFriend, deleteFriend })(Friend);