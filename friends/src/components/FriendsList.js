import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import e from 'cors';

class FriendsList extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
          .then(res => {
              console.log("AM: FriendsList.js: getData: res: ", res.data);
              this.setState({
                friends: res.data
              })
          })
          .catch(err => console.error("Unable to retrieve data: ", err.message));
    };


    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
        console.log(e.target.value);
    };

    
    render() {
        return (
            <div>
                <h1>Here Are Your Friends</h1>

                <div>
                    {this.state.friends.map(friend => {
                        return (
                            <div key={friend.id} >
                                <h4>{friend.name}</h4>
                                <p>Age: {friend.age}</p>
                                <p>Email: {friend.email}</p>
                            </div>
                        )
                    })}
                </div>

                <form>
                    <label htmlFor="name" >Name: </label>
                    <input id="name" name="name" type="text" value={this.state.newFriend.name} onChange={this.handleChange} />

                    <label htmlFor="age" >Age: </label>
                    <input id="age" name="age" type="text" value={this.state.newFriend.age} onChange={this.handleChange} />

                    <label htmlFor="email" >Email: </label>
                    <input id="email" name="email" type="text" value={this.state.newFriend.email} onChange={this.handleChange} />
                </form>
            </div>
        );
    };
};

export default FriendsList;