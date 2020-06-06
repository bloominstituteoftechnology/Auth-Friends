import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import axiosWithAuth from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state= {
        friendsList: [],
        isLoading: false
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            this.setState({
                friendsList: res.data.data
            })
        })
        .catch(err =>
            console.error("AA: FriendsList.js: getData: err.message", err.message)
            );
    };

    render(){
        return(
            <div>
                <h1>My Friends</h1>

            </div>
        )
    }

};

export default Friends;