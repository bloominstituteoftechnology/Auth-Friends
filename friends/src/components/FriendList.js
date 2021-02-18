import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import Loader from 'react-loader-spinner';
import Friend from "./Friend";

class FriendList extends React.Component {
    state = {
        isLoading: false,
        friends: [],
        friendSelected: false,
        selectedFriend: []
    }; 
    
    selectFriend = e => {
        e.preventDefault();
        if (this.state.friendSelected) {
            this.setState({
                friendSelected: false,
                selectedFriend: [{name: e.name, age: e.age, email: e.email}]
            })
        } else {
            this.setState({
                friendSelected: true
            })
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // set loading state
        this.setState({
            isLoading: true
        });
        // call api to get data
        // /api/friends

        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                console.log('ab: FriendList.js: getData(): res:', res);
                this.setState({
                    isLoading:false,
                    friends: res.data
                })
            })
            .catch((err) => {
                console.error(err.response)
            })
    };

    render() {
        return (
            <main className="friend-list">
                {this.state.isLoading && (
                    <div className="key spinner">
                        <Loader type="Circles" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )}
                {this.state.friends.map((friend) => (
                   <Friend friend={friend} toggleSelected={this.state.friendSelected} key={friend.id} /> 
                ))}
                {/* <button onClick={(e) => {this.props.history.push('/add')}}>Add a Friend!</button> */}
            </main>
        )
    }
}

export default FriendList;