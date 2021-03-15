import React from 'react';
import axios from 'axios';

import FriendCard from './FriendCard';

import { axiosWithAuth } from '../utils/axiosWithAuth'


class FriendsList extends React.Component {
    state = {
        friendsList: []
    };


    componentDidMount() {
        this.getData();
    }


    getData = () => {
        const token = localStorage.getItem("authToken");
        axiosWithAuth().get("/friends")
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    friendsList: res.data,
                })
            })
            .catch(err => console.log(err))
    }

    render () {
        return(
            <div>
                <h1>Friends List</h1>
                {this.state.friendsList.map( (friend, index) => {
                    return <FriendCard key={index} friend={friend} />
                })}
            </div>
        );
    };
};

export default FriendsList;