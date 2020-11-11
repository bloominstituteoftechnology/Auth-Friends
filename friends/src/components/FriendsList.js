import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/api/friends')
        .then((res) => {
            console.log(res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => console.log(err))
    };

    formatData = () => {
        const formattedData = [];
        this.state.friends.forEach((id, name, age, email) => {
            if(id.friends === 1) {
                formattedData.push({
                    id: id,
                    name: name,
                    age: age,
                    email: email
                })
            }
        })
    }

    render() {
        return (
            <div className="friends-page">
                <h1>These are my Friends!</h1>
                {this.state.friends.map((friend) => {
                    return (<div>{friend.name} {friend.age} {friend.email} {friend.id} </div>)
                    
                })}
            </div>
        )
    }
}

export default FriendsList;