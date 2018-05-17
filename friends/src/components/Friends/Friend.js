import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchFriend } from '../../actions';



class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchFriend(id)
    }

    deleteFriend = () => {
        const id = this.state.friend.id;
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(resp => this.setState({deleted: true}))
            .catch(err => console.log(err))
    }

    // fetchFriend = (id) => {
    //     axios
    //         .get(`http://localhost:5000/api/friends/${id}`)
    //         .then(resp => {
    //             this.setState(() => ({friend: resp.data}))
    //         })
    //         .catch(err => console.log(err))
    // }

    render() { 
        return this.props.deleted ? (
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
 
// export default Friend;

const mapDispatchToProps = state => {
    const { friendReducer } = state;
    return friendReducer;
  };
  
  export default connect(mapDispatchToProps, { fetchFriend })(Friend);