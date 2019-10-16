import React from 'react';
import AddFriend from './AddFriend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res =>  this.setState({friendsList: res.data}))
        .catch(err => console.log(err.response));
    }
    
    render() {
        return (
            <div>
                <AddFriend/>
                {this.state.friendsList.map(item => ( 
                <div key={item.id}>
                <h2>{item.name}</h2>
                <h4>Age: {item.age}</h4>
                <h4>Email: {item.email}</h4>
                </div>
                ))}
            </div>

            
        )
    }

}

export default FriendsList;