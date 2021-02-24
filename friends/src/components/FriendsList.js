import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                console.log(res);
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <div key={friend.id} className='friendContainer'>
                        <h3>Name : {friend.name}</h3>
                        <p>Age : {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;