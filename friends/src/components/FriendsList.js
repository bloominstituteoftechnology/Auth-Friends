import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
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
            </div>
        );
    };
};

export default FriendsList;