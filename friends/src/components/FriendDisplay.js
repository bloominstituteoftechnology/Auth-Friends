import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendDisplay extends React.Component{
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            this.setState({
                friends: res.data
            });
        })
    };

    render() {
        return (
            <>
                <h1>Friendos</h1>
                {this.state.friends.map((friend) => {
                    return (
                        <div key={friend.id}>
                            <h3>{friend.name}</h3>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default FriendDisplay