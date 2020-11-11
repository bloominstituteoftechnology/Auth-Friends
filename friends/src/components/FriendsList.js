import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component {
    state = {
        friends: []
            
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res=>{
            this.setState({
                friends: res.data
            })
        })
        .catch(err=>{console.log(err)});
    }

    newFriend = (e) => {
        axiosWithAuth()
        .post(`/friends`)
        .then(res=>{
            this.setState({
                friends: {
                    ...this.state.friends,
                    [e.target.name]: e.target.value,
                }
                
            })
        })
        .catch(err=>{console.log(err)});
    }

    render() {
        return (
            <div>
                {this.state.friends.map((friend) => (
                    <p key={friend.id}>Hello, {friend.name} from {friend.age}!</p>
                ))}
                <form>
                    <input
                    type="text"
                    name="name"
                    value={this.state.friends.name}
                    onChange={this.handleChange}
                    placeholder="name"
                    />
                </form>
            </div>
        );
    }
};

export default FriendsList;

