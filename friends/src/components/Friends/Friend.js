import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import { Redirect } from 'react-router-dom';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {},
            deleted: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id)
    }

    deleteFriend = () => {
        const id = this.state.friend.id;
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(resp => this.setState({deleted: true}))
            .catch(err => console.log(err))
    }

    fetchFriend = (id) => {
        axios
            .get(`http://localhost:5000/api/friends/${id}`)
            .then(resp => {
                this.setState(() => ({friend: resp.data}))
            })
            .catch(err => console.log(err))
    }

    render() { 
        return this.state.deleted ? (
            <Redirect to="/search"/>
        ) : (
            <div className="card">
                <FriendCard friend={this.state.friend}/>
                <button className="delete" 
                    onClick={this.deleteFriend}>Delete from Friends
                </button>
            </div>
        )
    }
}
 
export default Friend;