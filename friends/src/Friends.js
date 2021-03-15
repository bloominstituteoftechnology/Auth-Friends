import React from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from "./axiosWithAuth";

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    };

    getData = () => {
        // const token = localStorage.getItem('authToken');
        axiosWithAuth().get('/friends')
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <h2>{friend.name}</h2>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                    </div>
                ))}
            </div>
        )
    }
};

export default Friends;